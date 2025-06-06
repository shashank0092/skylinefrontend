import {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthScreen from './src/screens/Auth/Auth';

export type WithoutLoginStackList = {
  Auth: undefined;
};

const App = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const WithoutLoginStack = createNativeStackNavigator<WithoutLoginStackList>();
  const handleLoginSuccess = () => {
    setIsLogin(true);
  };
  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const value = await AsyncStorage.getItem('user_details');
        if (value === null) {
          setIsLogin(false);
        } else {
          setIsLogin(JSON.parse(value));
        }
      } catch (error) {
        console.error('Error checking first launch', error);
      }
    };
    checkFirstLaunch();
  }, []);
  useEffect(() => {
    SplashScreen.hide();
    console.log('shukla');
  }, []);
  return (
    <View style={Style.container}>
      {isLogin === false || isLogin === undefined ? (
        <WithoutLoginStack.Navigator>
          <WithoutLoginStack.Screen name="Auth" options={{headerShown: false}}>
            {props => (
              <AuthScreen {...props} onLoginSuccess={handleLoginSuccess} />
            )}
          </WithoutLoginStack.Screen>
        </WithoutLoginStack.Navigator>
      ) : (
        <View>
          <Text>THIS IS WITH LOGIN SCREEN</Text>
        </View>
      )}
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
