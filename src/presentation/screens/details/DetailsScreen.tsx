import {RouteProp, useRoute} from '@react-navigation/native';
import {ScrollView, Text} from 'react-native';
import {RootStackParams} from '../../navigation/StackNavigation';
import {useMovie} from '../../hooks/useMovie';
import {MovieHeader} from '../../components/movie/MovieHeader';
import {MovieDetails} from '../../components/movie/MovieDetails';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';

const DetailsScreen = () => {
  const {movieId} = useRoute<RouteProp<RootStackParams, 'Details'>>().params;
  const {movie, isLoading} = useMovie(movieId);

  if (isLoading) {
    return <FullScreenLoader />;
  }
  return (
    <ScrollView>
      {/*       Header */}
      <MovieHeader movie={movie!} />

      {/* Details */}

      <MovieDetails movie={movie!} />
    </ScrollView>
  );
};

export default DetailsScreen;
