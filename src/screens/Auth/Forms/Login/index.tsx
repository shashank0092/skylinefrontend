import { Formik } from 'formik';
import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'; // FontAwesome icons
import { LoginValidationSchema } from './LoginValidation';

interface LoginFormProps {
  onLoginSuccess: () => void;
  onSwitchToRegister: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onLoginSuccess,
  onSwitchToRegister,
}) => {
  const [loading, _] = useState(false);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginValidationSchema}
      onSubmit={values => {
        console.log('Login form submitted:', values);
        // After successful login:
        onLoginSuccess();
      }}
    >
      {({
        handleChange,
        handleBlur,
        touched,
        errors,
        handleSubmit,
        values,
      }) => (
        <View style={{ display: 'flex', gap: 20 }}>
          {/* Email Field */}
          <View>
            <Text style={styles.labelStyle}>Email</Text>
            <TextInput
              onChangeText={handleChange('email')}
              disabled={loading}
              onBlur={handleBlur('email')}
              value={values.email}
              mode="outlined"
              placeholder="Enter Email"
              cursorColor="black"
              placeholderTextColor="#898989"
              textColor="black"
              textContentType="emailAddress"
              outlineColor="#D1D1D1"
              activeOutlineColor="#D1D1D1"
              outlineStyle={{
                borderColor:
                  errors.email && touched.email ? 'red' : '#D1D1D1',
                borderWidth: 1.5,
                borderRadius: 10,
              }}
              style={{
                backgroundColor: loading ? '#F5F5F5' : 'white',
                opacity: loading ? 0.5 : 1,
                fontFamily: 'Inter_18-Black',
                fontWeight: '600',
              }}
            />
            {errors.email && touched.email ? (
              <Text style={styles.errorLabelStyle}>{errors.email}</Text>
            ) : null}
          </View>

          {/* Password Field */}
          <View>
            <Text style={styles.labelStyle}>Password</Text>
            <TextInput
              onChangeText={handleChange('password')}
              disabled={loading}
              onBlur={handleBlur('password')}
              value={values.password}
              mode="outlined"
              placeholder="Enter Password"
              cursorColor="black"
              placeholderTextColor="#898989"
              textColor="black"
              secureTextEntry
              textContentType="password"
              outlineColor="#D1D1D1"
              activeOutlineColor="#D1D1D1"
              outlineStyle={{
                borderColor:
                  errors.password && touched.password ? 'red' : '#D1D1D1',
                borderWidth: 1.5,
                borderRadius: 10,
              }}
              style={{
                backgroundColor: loading ? '#F5F5F5' : 'white',
                opacity: loading ? 0.5 : 1,
                fontFamily: 'Inter_18-Black',
                fontWeight: '600',
              }}
            />
            {errors.password && touched.password ? (
              <Text style={styles.errorLabelStyle}>{errors.password}</Text>
            ) : null}
          </View>

          {/* Submit Button */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={handleSubmit as () => void}
              disabled={loading}
              style={[styles.submitButton, loading && { opacity: 0.6 }]}
            >
              <Text style={styles.submitButtonText}>Login</Text>
            </TouchableOpacity>
          </View>


          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
            }}
          >
            <View style={{ flex: 1, height: 1, backgroundColor: '#D1D1D1' }} />
            <Text
              style={{
                marginHorizontal: 10,
                color: '#898989',
                fontWeight: '600',
              }}
            >
              OR
            </Text>
            <View style={{ flex: 1, height: 1, backgroundColor: '#D1D1D1' }} />
          </View>

          <View style={{ gap: 10, flexDirection: 'row', justifyContent: 'center' }}>
            {/* Google */}
            <TouchableOpacity
              onPress={() => console.log('Login with Google')}
              style={[styles.socialButton, { backgroundColor: '#DB4437' }]}
            >
              <Icon name="google" size={24} color="white" />
            </TouchableOpacity>

            {/* Facebook */}
            <TouchableOpacity
              onPress={() => console.log('Login with Facebook')}
              style={[styles.socialButton, { backgroundColor: '#1877F2' }]}
            >
              <Icon name="facebook" size={24} color="white" />
            </TouchableOpacity>

            {/* Twitter */}
            <TouchableOpacity
              onPress={() => console.log('Login with Twitter')}
              style={[styles.socialButton, { backgroundColor: '#1DA1F2' }]}
            >
              <Icon name="twitter" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.loginPromptContainer}>
            <Text style={styles.loginPromptText}>Don't have an account?</Text>
            <TouchableOpacity onPress={onSwitchToRegister}>
              <Text style={styles.loginPromptButton}>Register Here</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    fontFamily: 'Inter_18pt-SemiBold',
    fontSize: 12,
  },
  errorLabelStyle: {
    fontFamily: 'Inter_24pt-SemiBold',
    fontSize: 12,
    marginInline: 10,
    marginBlock: 1,
    color: 'red',
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  
  buttonContainer: {
    // to be Pushed
  },
  submitButton: {
    backgroundColor: '#1E90FF', // Sky blue
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter_18pt-SemiBold',
    fontWeight: '600',
    textAlign: 'center',
  },
  loginPromptContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  loginPromptText: {
    fontSize: 14,
    color: '#444',
    fontFamily: 'Inter_18pt-Regular',
  },
  loginPromptButton: {
    fontSize: 14,
    color: '#1E90FF',
    fontFamily: 'Inter_18pt-SemiBold',
    marginLeft: 4,
    textDecorationLine: 'underline',
  },
});

export default LoginForm;
