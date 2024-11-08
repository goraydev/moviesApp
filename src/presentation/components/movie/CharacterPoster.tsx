import {Image, StyleSheet, Text, View} from 'react-native';
import {Cast} from '../../../core/entities/cast.entity';

interface Props {
  cast: Cast;
  height?: number;
  width?: number;
}

export const CharacterPoster = ({cast}: Props) => {
  return (
    <View
      style={{...styles.imageContainer, marginRight: 10, marginTop: 10}}>
      <Image source={{uri: cast.avatar}} style={{...styles.image}} />
      <View style={styles.characterInfo}>
        <Text
          style={{...styles.textCharacter, fontWeight: '900', fontSize: 20}}>
          {cast.name}
        </Text>
        <Text style={styles.textCharacter}>Actuó de {cast.character}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
  },
  imageContainer: {
    height: 400,
    width: 200,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    borderWidth: 1,
    borderRadius: 18,
  },
  characterInfo: {
    padding: 10,
  },
  textCharacter: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 15,
  },
});
