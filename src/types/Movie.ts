export interface Movie {
    id: number;
    title: string;
    release_date: string;
    poster_path: string;
}

export interface CastMember {
    id: number;
    name: string;
    character?: string;
    profile_path?: string;
}

export interface CrewMember {
    id: number;
    name: string;
    job: string;
    department?: string;
}

export interface MovieDetails extends Movie {
    overview: string;
    credits: {
        cast: CastMember[];
        crew: CrewMember[];
    };
}

export const CategoriesMovieFilter = ["now_playing", "popular", "top_rated", "upcoming"] as const;
export type CategoryType = (typeof CategoriesMovieFilter)[number];