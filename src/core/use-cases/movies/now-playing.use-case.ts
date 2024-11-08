import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {NowPlayingResponse} from '../../../infraestructure/interfaces/movie-db.respones';
import { MovieMapper } from '../../../infraestructure/mappers/movie.mapper';
import type {Movie} from '../../entities/movies.entity';

export const moviesNowPlayingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');

    return nowPlaying.results.map(result => MovieMapper.fromMovieDBResultToEntity(result));
  } catch (error) {
    throw new Error('Error fetching movies - NowPlaying');
  }
};
