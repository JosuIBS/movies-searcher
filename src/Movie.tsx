import { Movie as MovieType } from "./types/types.ts";
export const Movie = ({ title, year }: Pick<MovieType, "title" | "year">) => {
  return (
    <div className="movie-card">
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-year">{year}</p>
      </div>
    </div>
  );
};
