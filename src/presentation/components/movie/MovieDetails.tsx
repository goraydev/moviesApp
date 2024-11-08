import {Text, View} from 'react-native';
import {FullMovie} from '../../../core/entities/movies.entity';
import {Formatter} from '../../../helpers/formatter';
import {useMovie} from '../../hooks/useMovie';
import {MovieCast} from './MovieCast';
import {HorizontalCarousel} from '../movies';

interface Props {
  movie: FullMovie;
}

export const MovieDetails = ({movie}: Props) => {
  const {cast, similar} = useMovie(movie.id);
  

  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            marginTop: 15,
            margin: 'auto',
          }}>
          <Text>{movie.rating}</Text>
          <Text>- {movie.genres.join(', ')}</Text>
        </View>
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Historia
        </Text>
        <Text style={{fontSize: 14}}>{movie.description}</Text>
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Presupuesto
        </Text>
        <Text style={{fontSize: 14}}>{Formatter.currency(movie.budget)}</Text>
        {/* Casting */}
        <View style={{marginTop: 10, marginBottom: 10}}>
          <Text style={{fontSize: 23, fontWeight: 'bold'}}>Actores</Text>
          <MovieCast cast={cast!} />
        </View>
        <View style={{marginTop: 10, marginBottom: 10}}>
          <Text style={{fontSize: 23, fontWeight: 'bold', marginBottom: 10}}>
            Peliculas Similares
          </Text>
          <HorizontalCarousel movie={similar!} />
        </View>
      </View>
    </>
  );
};
