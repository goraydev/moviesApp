import {useEffect, useState} from 'react';
import type {Movie} from '../../core/entities/movies.entity';

import * as UseCases from '../../core/use-cases';
import {moviesDBFetcher} from '../../config/adapters/movieDB.adapter';

let popularPageNumber = 1,
  upComingPageNumber = 1,
  topRatedPageNumber = 1;
export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [upComing, setUpComing] = useState<Movie[]>([]);
  const [topRated, settopRated] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const allTypeMovies = await Promise.all([
      UseCases.moviesNowPlayingUseCase(moviesDBFetcher),
      UseCases.moviesUpComingUseCase(moviesDBFetcher),
      UseCases.moviesTopRatedUseCase(moviesDBFetcher),
      UseCases.moviesPopularUseCase(moviesDBFetcher),
    ]);

    setIsLoading(false);
    setNowPlaying(allTypeMovies[0]);
    setUpComing(allTypeMovies[1]);
    settopRated(allTypeMovies[2]);
    setPopularMovies(allTypeMovies[3]);
  };

  const popularNextPage = async () => {
    popularPageNumber++;
    const popularMovies = await UseCases.moviesPopularUseCase(moviesDBFetcher, {
      page: popularPageNumber,
    });

    setPopularMovies(prev => [...prev, ...popularMovies]);
  };

  const upComingNextPage = async () => {
    upComingPageNumber++;

    const upComingMovies = await UseCases.moviesUpComingUseCase(
      moviesDBFetcher,
      {page: upComingPageNumber},
    );

    
    setUpComing(prev => [...prev, ...upComingMovies]);
  };

  const topRatingNextPage = async () => {
    topRatedPageNumber++;

    const topRatedMovies = await UseCases.moviesTopRatedUseCase(
      moviesDBFetcher,
      {page: topRatedPageNumber},
    );
   

    settopRated(prev => [...prev, ...topRatedMovies]);
  };

  return {
    isLoading,
    nowPlaying,
    upComing,
    topRated,
    popularMovies,

    //methods
    popularNextPage,
    upComingNextPage,
    topRatingNextPage,
  };
};
