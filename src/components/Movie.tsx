import { FC } from "react";

type Props = {
  title: string;
  year: number;
};

export const Movie: FC<Props> = ({ title, year }) => (
  <div className="movie-card">
    <div className="movie-info">
      <h3 className="movie-title">{title}</h3>
      <p className="movie-year">{year}</p>
    </div>
  </div>
);
