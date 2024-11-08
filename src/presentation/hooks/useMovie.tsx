import {useEffect, useState} from 'react';
import * as UseCases from '../../core/use-cases';
import {moviesDBFetcher} from '../../config/adapters/movieDB.adapter';
import {FullMovie, Movie} from '../../core/entities/movies.entity';
import {Cast} from '../../core/entities/cast.entity';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[]>();
  const [similar, setSimilar] = useState<Movie[]>();

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    const fullMovie = await Promise.all([
      UseCases.getMovieByIdUseCase(moviesDBFetcher, movieId),
      UseCases.getMovieCastUseCase(moviesDBFetcher, movieId),
      UseCases.getMovieSimilarById(moviesDBFetcher, movieId),
    ]);

    setMovie(fullMovie[0]);
    setCast(fullMovie[1]);
    setSimilar(fullMovie[2]);
    setIsLoading(false);
  };

  return {
    isLoading,
    movie,
    cast,
    similar,

    //methods
    loadMovie,
  };
};
