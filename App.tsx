import {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthScreen from './src/screens/Auth/Auth';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import OnboardingScreens from './src/screens/Onboarding';
import DrawerNaviagtion from './src/global/DrawerNaviagtion';
import ActiveTripDetails from './src/screens/ActiveTrips/ActiveTrips';
import Chat from './src/screens/Chats';

export type WithoutLoginStackList = {
  Onboarding: undefined;
  Auth: undefined;
};

export type WithLoginStackList = {
  navi: undefined;
  ActiveTripDetails: undefined;
  chat: undefined;
};

const App = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const WithoutLoginStack = createNativeStackNavigator<WithoutLoginStackList>();
  const WithLoginStack = createNativeStackNavigator<WithLoginStackList>();
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
    <SafeAreaProvider>
      <SafeAreaView style={Style.container}>
        <View style={Style.container}>
          {isLogin === false || isLogin === undefined ? (
            <WithoutLoginStack.Navigator initialRouteName="Onboarding">
              <WithoutLoginStack.Screen
                name="Onboarding"
                component={OnboardingScreens}
                options={{headerShown: false}}
              />
              <WithoutLoginStack.Screen
                name="Auth"
                options={{headerShown: false}}>
                {props => (
                  <AuthScreen {...props} onLoginSuccess={handleLoginSuccess} />
                )}
              </WithoutLoginStack.Screen>
            </WithoutLoginStack.Navigator>
          ) : (
            <WithLoginStack.Navigator>
              <WithLoginStack.Screen
                name="navi"
                options={{headerShown: false}}
                component={DrawerNaviagtion}
              />
              <WithLoginStack.Screen
                name="ActiveTripDetails"
                options={{
                  headerShown: true,
                  headerTitle: 'Active Trips',
                  headerStyle: {
                    backgroundColor: '#ffffff',
                  },
                }}
                component={ActiveTripDetails}
              />
              <WithLoginStack.Screen
                name="chat"
                options={{
                  headerShown: true,
                  headerTitle: 'Chat',
                  headerStyle: {
                    backgroundColor: '#ffffff',
                  },
                }}
                component={Chat}
              />
            </WithLoginStack.Navigator>
          )}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const Style = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
});

export default App;
