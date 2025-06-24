import "./App.css";
import { useState } from "react";
import { Movie as MovieCard } from "./components/Movie";
import { useMovieSearch } from "./servicio/useMovieSearch";

export const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const movies = useMovieSearch(searchTerm);

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
          {movies.map((movie) => (
            <MovieCard key={movie.id} title={movie.title} year={movie.year} />
          ))}
        </div>
      </main>
    </div>
  );
};
