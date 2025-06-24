import React, { useState } from "react";
import "./App.css";
import movies from "./data/movies.json";

const Movie = ({ title, year }) => {
  return (
    <div className="movie-card">
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-year">{year}</p>
      </div>
    </div>
  );
};

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
          {movies
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
