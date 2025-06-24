import { FC, useState } from "react";

type Props = {
  title: string;
  year: number;
};

export const Movie: FC<Props> = ({ title, year }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div className="movie-card">
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-year">{year}</p>
      </div>

      <button
        className="like-button"
        onClick={handleLikeClick}
        type="button"
        aria-pressed={isLiked}
      >
        {isLiked ? "❤️" : "🤍"} Me gusta
      </button>
    </div>
  );
};
