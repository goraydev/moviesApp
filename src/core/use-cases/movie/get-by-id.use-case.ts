import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieDBMovie} from '../../../infraestructure/interfaces/movie-db.respones';
import {MovieMapper} from '../../../infraestructure/mappers/movie.mapper';
import type {FullMovie} from '../../entities/movies.entity';

export const getMovieByIdUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<FullMovie> => {
  try {
    //fetcher

    const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`);

    //mapeo
    //return del fullmovie
    return MovieMapper.fromMoviesDBtoEntity(movie);
  } catch (error) {
    throw new Error(`No se pudo obtener la pelicula con el ID ${movieId}`);
  }
};
