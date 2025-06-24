import "./App.css";
import { useEffect, useState } from "react";
import { Movie } from "./dominio/Movies";
import { MovieJsonRepository } from "./infraestructura/MovieJsonRepository";
import { SearchMovies } from "./servicio/SearchMovie";
import { Movie as MovieCard } from "./components/Movie";

export const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const repo = new MovieJsonRepository();
    const searcher = new SearchMovies(repo);

    const load = async () => {
      const results = await searcher.execute(searchTerm);
      setMovies(results);
    };

    load();
  }, [searchTerm]);

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
