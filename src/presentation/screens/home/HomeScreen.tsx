import {Text, View} from 'react-native';
import {useMovies} from '../../hooks/useMovies';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HorizontalCarousel, PosterCarousel} from '../../components/movies';
import {FullScreenLoader} from '../../components/loaders/FullScreenLoader';

export type HomeRoutes = {
  Details: undefined;
};

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  const {
    isLoading,
    nowPlaying,
    upComing,
    topRated,
    popularMovies,
    popularNextPage,
    upComingNextPage,
    topRatingNextPage,
  } = useMovies();

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        <PosterCarousel movies={nowPlaying} />
        <HorizontalCarousel
          movie={popularMovies}
          title="Populares"
          loadNextPage={popularNextPage}
        />
        <HorizontalCarousel
          movie={upComing}
          title="Próximamente"
          loadNextPage={upComingNextPage}
        />
        <HorizontalCarousel
          movie={topRated}
          title="Mejores Calificadas"
          loadNextPage={topRatingNextPage}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
