import { Movie } from "./Movies";
export interface MovieRepository {
  getAll(): Promise<Movie[]>;
}
