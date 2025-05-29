import axios from "axios";

const ACCESS_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWFmY2U2ZWVjOTFhM2Q4Y2RmYWE4ZGU0Zjk5NDAzNyIsIm5iZiI6MTcyODM3MTA0NC4yMzEsInN1YiI6IjY3MDRkOTY0MWI5NmI4ZWY0YzY5YzZiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.haC45iAeB18SdyjaEoz42faPLKq_CaOEH_TAP5rjlOk";

const tmdb = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
});

export const fetchMovies = (category: string, page = 1) =>
    tmdb.get(`/movie/${category}`, { params: { page } });

export const searchMovies = (query: string, page = 1) =>
    tmdb.get("/search/movie", { params: { query, page } });

export const fetchMovieDetails = (id: string) =>
    tmdb.get(`/movie/${id}`, { params: { append_to_response: "credits" } });
