import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieDBCast} from '../../../infraestructure/interfaces/movie-db.respones';
import {CastMapper} from '../../../infraestructure/mappers/cast.mapper';
import {Cast} from '../../entities/cast.entity';

export const getMovieCastUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<Cast[]> => {
  try {
    //http
    const {cast} = await fetcher.get<MovieDBCast>(`/${movieId}/credits`);

    //mapper
    const actors = cast.map(actor => CastMapper.fromMovieDBCastToEntity(actor));

    return actors;

    //return
  } catch (error) {
    throw new Error(`No se pudo traer los actores de  ${movieId}`);
  }
};
