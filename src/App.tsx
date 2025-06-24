import { useState } from "react";
import "./App.css";
import moviesData from "./data/movies.json";
import { Movie } from "./components/Movie.tsx";
import { Movie as MovieType } from "./types/types.ts";

const movies: MovieType[] = moviesData as MovieType[];

export const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <header className="app-header">
        <h1>🎬 Movie Search</h1>
        <p className="subtitle">Encuentra tu película favorita</p>
      </header>

      <main className="main-content">
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar películas por título..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="movie-list">
          {moviesData
            .filter((movie) =>
              movie.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((movie) => (
              <Movie key={movie.id} title={movie.title} year={movie.year} />
            ))}
        </div>
      </main>
    </div>
  );
};
