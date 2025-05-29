import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const mockMovie = {
    id: 123,
    title: "Inception",
    release_date: "2010-07-16",
    poster_path: "/inception.jpg",
};

describe("MovieCard", () => {
    it("renders movie data using test ids", () => {
        render(
            <MemoryRouter>
                <MovieCard movie={mockMovie} />
            </MemoryRouter>
        );

        const card = screen.getByTestId("movie-card");
        expect(card).toBeInTheDocument();

        const poster = screen.getByTestId("movie-poster") as HTMLImageElement;
        expect(poster).toHaveAttribute("src", "https://image.tmdb.org/t/p/w500/inception.jpg");
        expect(poster).toHaveAttribute("alt", "Inception");

        const title = screen.getByTestId("movie-title");
        expect(title.textContent).toBe("Inception");

        const year = screen.getByTestId("movie-year");
        expect(year.textContent).toBe("2010");

        const link = screen.getByTestId("movie-link");
        expect(link).toHaveAttribute("href", "/movie/123");
    });
});
