import React from 'react';
import {View, Text} from 'react-native';

interface AuthScreenProps {
  onLoginSuccess: () => void;
}
const AuthScreen: React.FC<AuthScreenProps> = ({onLoginSuccess}) => {
  return (
    <View>
      <Text> THIS IS AUTH </Text>
    </View>
  );
};

export default AuthScreen;
