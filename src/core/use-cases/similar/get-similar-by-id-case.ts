import {Movie} from '../../entities/movies.entity';
import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieSimiliarByID} from '../../../infraestructure/interfaces/movie-db.respones';
import {MovieMapper} from '../../../infraestructure/mappers/movie.mapper';

export const getMovieSimilarById = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<Movie[]> => {
  try {
    //fetcher

    const getSimiliarMovies = await fetcher.get<MovieSimiliarByID>(
      `/${movieId}/similar`,
    );

    //mapper

    const moviesSimilar = getSimiliarMovies.results.map(
      MovieMapper.fromMovieDBResultToEntity,
    );

    //return

    return moviesSimilar;
  } catch (error) {
    throw new Error(`No se pudo obtener la data de ${movieId}`);
  }
};
