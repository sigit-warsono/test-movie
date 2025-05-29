import type { Movie } from "../types/Movie";
import { Link } from "react-router-dom";
import { MdOutlineImageNotSupported } from "react-icons/md";

function truncateText(text: string, maxLength: number ) {
    if (text.length <= maxLength) {
        return text;
    }
    return text.slice(0, maxLength) + '...';
}

const MovieCard = ({ movie }: { movie: Movie })=> (
        <div className="rounded overflow-hidden shadow-lg" data-testid="movie-card">
            <Link to={`/movie/${movie.id}`} data-testid="movie-link">

                {movie.poster_path===null ?
                <div className={"h-[15rem] w-full bg-green-100 flex justify-center items-center"}>
                    <MdOutlineImageNotSupported />
                </div>
                    :
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        data-testid="movie-poster"
                        loading={"lazy"}
                        className={"h-[15rem] w-full"}
                    />
                }

                <div className="p-2 bg-gray-200">
                    <h2 className="text-lg font-bold" data-testid="movie-title">{truncateText(movie.title, 23)}</h2>
                    <p className="text-sm text-gray-500" data-testid="movie-year">
                        {new Date(movie.release_date).getFullYear()}
                    </p>
                </div>
            </Link>
        </div>
    );

export default MovieCard;
