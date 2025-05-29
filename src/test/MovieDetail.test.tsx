import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import MovieDetail from "../pages/MovieDetail.tsx";
import * as tmdb from "../api/tmdb";
import type { MovieDetails } from "../types/Movie";
import type { AxiosResponse, InternalAxiosRequestConfig } from "axios";



const minimalConfig: InternalAxiosRequestConfig = {
    headers: {} as never,
};




vi.mock("../api/tmdb", async () => {
    const actual = await vi.importActual<typeof import("../api/tmdb")>("../api/tmdb");
    return {
        ...actual,
        fetchMovieDetails: vi.fn(),
    };
});




const fetchMovieDetailsMock = vi.mocked(tmdb.fetchMovieDetails);

const mockMovieDetails: MovieDetails = {
    id: 123,
    release_date: "2010-07-16",
    title: "Inception",
    overview: "A mind-bending thriller.",
    poster_path: "/poster.jpg",
    credits: {
        crew: [
            { id: 1, job: "Director", name: "Christopher Nolan" },
        ],
        cast: [
            { id: 101, name: "Leonardo DiCaprio" },
            { id: 102, name: "Joseph Gordon-Levitt" },
            { id: 103, name: "Elliot Page" },
            { id: 104, name: "Tom Hardy" },
            { id: 105, name: "Ken Watanabe" },
        ],
    },
};
describe("MovieDetail", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("renders movie details", async () => {
        const mockResponse: AxiosResponse<MovieDetails> = {
            data: mockMovieDetails,
            status: 200,
            statusText: "OK",
            headers: {},
            config: minimalConfig,
        };

        fetchMovieDetailsMock.mockResolvedValueOnce(mockResponse);

        render(
            <MemoryRouter initialEntries={["/movie/123"]}>
                <Routes>
                    <Route path="/movie/:id" element={<MovieDetail />} />
                </Routes>
            </MemoryRouter>
        );

        await screen.findByTestId("movie-detail");
        expect(screen.getByText("Inception")).toBeInTheDocument();
        expect(screen.getByTestId("director-christopher-nolan")).toBeInTheDocument();
    });
});
