import {Cast} from '../../../core/entities/cast.entity';
import {FlatList} from 'react-native-gesture-handler';
import {CharacterPoster} from './CharacterPoster';

interface Props {
  cast: Cast[];
}

export const MovieCast = ({cast}: Props) => {
  return (
    <FlatList
      data={cast}
      renderItem={({item}) => <CharacterPoster cast={item} />}
      keyExtractor={item => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};
