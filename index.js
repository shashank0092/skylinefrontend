/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider} from 'react-native-paper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import './gesture-handler';

const Main = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <GestureHandlerRootView>
          <App />
        </GestureHandlerRootView>
      </PaperProvider>
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => Main);
