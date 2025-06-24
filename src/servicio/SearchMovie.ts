import { MovieRepository } from "../dominio/MovieRepository.ts";
import { Movie } from "../dominio/Movies.ts";

export class SearchMovies {
  constructor(private readonly repository: MovieRepository) {}

  async execute(term: string): Promise<Movie[]> {
    const all = await this.repository.getAll();
    return all.filter((movie) =>
      movie.title.toLowerCase().includes(term.toLowerCase())
    );
  }
}
