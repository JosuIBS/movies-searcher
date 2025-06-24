import { useEffect, useState } from "react";
import { Movie } from "../dominio/Movies";
import { MovieJsonRepository } from "../infraestructura/MovieJsonRepository";
import { SearchMovies } from "../servicio/SearchMovie";

export const useMovieSearch = (searchTerm: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const repo = new MovieJsonRepository();
    const searcher = new SearchMovies(repo);

    const load = async () => {
      const results = await searcher.execute(searchTerm);
      setMovies(results);
    };

    load();
  }, [searchTerm]);

  return movies;
};
