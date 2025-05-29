import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchMovieDetails } from "../api/tmdb";
import type { MovieDetails } from "../types/Movie";
import SkeletonLoad from "../components/SkeletonLoad.tsx";

const slugify = (str: string) =>
    str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

const MovieDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<MovieDetails | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loadDetails = async () => {
            const res = await fetchMovieDetails(id!);
            setMovie(res.data);
        };
        loadDetails();
    }, [id]);

    if (!movie) return <div className={"max-w-7xl mx-auto p-4 pt-7"}>
        <SkeletonLoad />
    </div>;

    const director = movie.credits.crew.find((c) => c.job === "Director");

    return (
        <div className="max-w-7xl mx-auto p-4 shadow-black rounded" data-testid="movie-detail">
            <button
                onClick={() => navigate(-1)}
                className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
                data-testid="back-button"
            >
                ← Back
            </button>

            <div className="flex gap-6  bg-blue-900 rounded-3xl">
                <img
                    className="w-full md:w-1/3 rounded"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                />
                <div className={"p-4"}>
                    <h2 className="text-2xl font-bold mb-2 text-blue-200">{movie.title}</h2>
                    <p className="mb-4 text-blue-100">{movie.overview}</p>

                    {director && (
                        <p
                            className="font-semibold text-blue-100"
                            data-testid={`director-${slugify(director.name)}`}
                        >
                            Director: <span className={"font-extralight"}>{director.name}</span>
                        </p>
                    )}
                    <div className={"flex flex-col gap-2"}>
                        <p className="mt-2 font-semibold text-blue-100">Main Cast:</p>
                        <div className="flex flex-wrap items-center gap-2 mt-2">
                            {movie.credits.cast.slice(0, 5).map((actor) => (
                                <div
                                    className={"p-2 px-3 text-blue-100 bg-amber-500 border border-yellow-700 rounded-3xl text-[1.5rem]"}
                                    key={actor.name}
                                    data-testid={`cast-member-${slugify(actor.name)}`}
                                >
                                    {actor.name}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
