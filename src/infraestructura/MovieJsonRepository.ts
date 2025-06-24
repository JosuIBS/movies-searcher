import moviesData from "../data/movies.json";
import { Movie } from "../dominio/Movies";
import { MovieRepository } from "../dominio/MovieRepository";

export class MovieJsonRepository implements MovieRepository {
  async getAll(): Promise<Movie[]> {
    return moviesData as Movie[];
  }
}
