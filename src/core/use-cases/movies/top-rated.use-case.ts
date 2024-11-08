import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {
  PropsPage,
  TopRatedResponse,
} from '../../../infraestructure/interfaces/movie-db.respones';
import {MovieMapper} from '../../../infraestructure/mappers/movie.mapper';
import {Movie} from '../../entities/movies.entity';

export const moviesTopRatedUseCase = async (
  fetcher: HttpAdapter,
  options?: PropsPage,
): Promise<Movie[]> => {
  try {
    const topRated = await fetcher.get<TopRatedResponse>('/top_rated', {
      params: {
        page: options?.page ?? 1,
      },
    });

    return topRated.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    throw new Error('Error fetching movies - UpComing');
  }
};
