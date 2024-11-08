import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, Text, View} from 'react-native';
import StackNavigation from './presentation/navigation/StackNavigation';

const Main = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default Main;
