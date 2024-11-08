import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {Movie} from '../../entities/movies.entity';
import {PopularMoviesResponse} from '../../../infraestructure/interfaces/movie-db.respones';
import {MovieMapper} from '../../../infraestructure/mappers/movie.mapper';

interface Props {
  page?: number;
  limit?: number;
}

export const moviesPopularUseCase = async (
  fetcher: HttpAdapter,
  options?: Props,
): Promise<Movie[]> => {
  try {
    const popularMovies = await fetcher.get<PopularMoviesResponse>('/popular', {
      params: {
        page: options?.page ?? 1,
      },
    });

    return popularMovies.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    throw new Error('Error de fetching movies - Popular');
  }
};
