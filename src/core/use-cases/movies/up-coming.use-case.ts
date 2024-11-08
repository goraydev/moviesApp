import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {
  PropsPage,
  UpComingResponse,
} from '../../../infraestructure/interfaces/movie-db.respones';
import {MovieMapper} from '../../../infraestructure/mappers/movie.mapper';
import {Movie} from '../../entities/movies.entity';

export const moviesUpComingUseCase = async (
  fetcher: HttpAdapter,
  options?: PropsPage,
): Promise<Movie[]> => {
  try {
    const upComing = await fetcher.get<UpComingResponse>('/upcoming', {
      params: {
        page: options?.page ?? 1,
      },
    });

    return upComing.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    throw new Error('Error fetching movies - UpComing');
  }
};
