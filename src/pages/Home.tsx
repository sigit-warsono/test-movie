import { useEffect, useState, useRef, useCallback } from "react";
import { fetchMovies, searchMovies } from "../api/tmdb";
import type {CategoryType, Movie} from "../types/Movie";
import MovieCard from "../components/MovieCard";
import SearchForm from "../components/SearchForm.tsx";
import SelectFilter from "../components/SelectFilter.tsx";
import Loading from "../components/LoadMore.tsx";

const Home = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState(1);
    const [category, setCategory] = useState<CategoryType>("now_playing");
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const observerRef = useRef<HTMLDivElement | null>(null);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        const response = searchQuery
            ? await searchMovies(searchQuery, page)
            : await fetchMovies(category, page);
        setMovies((prev) => [...prev, ...response.data.results]);
        setIsLoading(false);
    }, [page, category, searchQuery]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        // Reset movies when query or category changes
        setMovies([]);
        setPage(1);
    }, [category, searchQuery]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) setPage((prev) => prev + 1);
        });

        if (observerRef.current) observer.observe(observerRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-4 ">
            <h1 className="text-2xl font-bold text-blue-200 mb-4">TMDB Movies</h1>

            <div className="flex gap-8 mb-4">
                <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                <SelectFilter category={category} setCategory={setCategory} />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-10">
                {movies.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))}
            </div>

            <Loading observerRef={observerRef} isLoading={isLoading} />
        </div>
    );
};

export default Home;
