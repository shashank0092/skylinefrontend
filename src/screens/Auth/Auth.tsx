/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import RegisterForm from './Forms/Register';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

interface AuthScreenProps {
  onLoginSuccess: () => void;
}
const AuthScreen: React.FC<AuthScreenProps> = ({onLoginSuccess}) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={Styles.mainView}>
        <ScrollView>
          <View style={Styles.mainView}>
            <View style={Styles.ImageView}>
              <Image
                source={require('../assets/Register.png')}
                style={Styles.RegisterImage}
              />
            </View>
            <View style={{display: 'flex', gap: 40}}>
              <View>
                <Text style={Styles.RegisterText}>Register Here</Text>
              </View>
              <View>
                <RegisterForm />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const Styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
    paddingInline: 20,
  },
  ImageView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  RegisterImage: {
    height: 300,
    width: 300,
  },
  RegisterText: {
    textAlign: 'center',
    fontFamily: 'Inter_18pt-SemiBold',
    fontSize: 20,
  },
  headerText: {
    fontFamily: 'Inter_18pt-Regular',
    fontSize: 40,
  },
});
export default AuthScreen;
