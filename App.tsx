import {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    console.log('shukla');
  }, []);
  return (
    <View style={Style.container}>
      <Text>THIS IS DEVELOP BRANCH </Text>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
});

export default App;
