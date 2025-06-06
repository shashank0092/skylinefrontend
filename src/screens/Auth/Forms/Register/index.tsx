/* eslint-disable react-native/no-inline-styles */
import {Formik} from 'formik';
import {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import {RegisterValidationSchema} from './RegisterValidation';

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [GenderOpen, setGenderOpen] = useState(false);
  const [Gendervalue, setGenderValue] = useState(null);
  const [genders, setGenders] = useState([
    {label: 'Man', value: 'man'},
    {label: 'Women', value: 'women'},
    {label: 'Other', value: 'other'},
  ]);

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        gender: '',
        addharNumber: '',
      }}
      validationSchema={RegisterValidationSchema}
      onSubmit={values => {
        console.log(values);
      }}>
      {({
        handleChange,
        handleBlur,
        touched,
        errors,
        handleSubmit,
        values,
        setFieldValue,
        setFieldTouched,
      }) => (
        <View style={{display: 'flex', gap: 20}}>
          <View style={{display: 'flex', flexDirection: 'row', gap: 20}}>
            <View>
              <View>
                <Text style={Style.labelStyle}> Name</Text>
              </View>
              <TextInput
                onChangeText={handleChange('name')}
                disabled={loading}
                onBlur={handleBlur('name')}
                value={values.name}
                mode="outlined"
                outlineColor="#D1D1D1"
                activeOutlineColor="#D1D1D1"
                placeholder="Enter Name"
                cursorColor="black"
                placeholderTextColor="#898989"
                textColor="black"
                textContentType="name"
                outlineStyle={{
                  borderColor: errors.name && touched.name ? 'red' : '#D1D1D1',
                  borderWidth: 1.5,
                  borderRadius: 10,
                  width: 170,
                }}
                style={{
                  backgroundColor: loading ? '#F5F5F5' : 'white',
                  opacity: loading ? 0.5 : 1,
                  fontFamily: 'Inter_18-Black',
                  fontWeight: '600',
                  width: 170,
                }}
              />
              {errors.name && touched.name ? (
                <Text style={Style.errorLabelStyle}>{errors.name}</Text>
              ) : null}
            </View>
            <View>
              <View>
                <Text style={Style.labelStyle}> Email</Text>
              </View>
              <TextInput
                onChangeText={handleChange('email')}
                disabled={loading}
                onBlur={handleBlur('email')}
                value={values.email}
                mode="outlined"
                outlineColor="#D1D1D1"
                activeOutlineColor="#D1D1D1"
                placeholder="Enter Email"
                cursorColor="black"
                placeholderTextColor="#898989"
                textColor="black"
                textContentType="emailAddress"
                outlineStyle={{
                  borderColor:
                    errors.email && touched.email ? 'red' : '#D1D1D1',
                  borderWidth: 1.5,
                  borderRadius: 10,
                  width: 170,
                }}
                style={{
                  backgroundColor: loading ? '#F5F5F5' : 'white',
                  opacity: loading ? 0.5 : 1,
                  fontFamily: 'Inter_18-Black',
                  fontWeight: '600',
                  width: 170,
                }}
              />
              {errors.email && touched.email ? (
                <Text style={Style.errorLabelStyle}>{errors.email}</Text>
              ) : null}
            </View>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', gap: 20}}>
            <View>
              <View>
                <Text style={Style.labelStyle}> Password</Text>
              </View>
              <TextInput
                onChangeText={handleChange('password')}
                disabled={loading}
                onBlur={handleBlur('password')}
                value={values.password}
                mode="outlined"
                outlineColor="#D1D1D1"
                activeOutlineColor="#D1D1D1"
                placeholder="Enter password"
                cursorColor="black"
                placeholderTextColor="#898989"
                textColor="black"
                textContentType="password"
                secureTextEntry
                outlineStyle={{
                  borderColor:
                    errors.password && touched.password ? 'red' : '#D1D1D1',
                  borderWidth: 1.5,
                  borderRadius: 10,
                  width: 170,
                }}
                style={{
                  backgroundColor: loading ? '#F5F5F5' : 'white',
                  opacity: loading ? 0.5 : 1,
                  fontFamily: 'Inter_18-Black',
                  fontWeight: '600',
                  width: 170,
                }}
              />
              {errors.email && touched.email ? (
                <Text style={Style.errorLabelStyle}>{errors.password}</Text>
              ) : null}
            </View>
            <View>
              <View>
                <Text style={Style.labelStyle}> Gender</Text>
              </View>
              <DropDownPicker
                open={GenderOpen}
                value={Gendervalue}
                items={genders}
                setOpen={setGenderOpen}
                setValue={callback => {
                  const value = callback(Gendervalue);
                  setGenderValue(value);
                  setFieldValue('gender', value); // 👈 Formik me gender value update
                }}
                onChangeValue={value => {
                  setFieldTouched('gender', true);
                  setFieldValue('gender', value); // 👈 Ensure formik value update here too
                }}
                setItems={setGenders}
                style={{
                  width: '70%',
                  borderColor: '#D1D1D1',
                  height: 55,
                }}
              />
              {errors.gender && touched.gender ? (
                <Text style={Style.errorLabelStyle}>{errors.gender}</Text>
              ) : null}
            </View>
          </View>
          <View>
            <View>
              <View>
                <Text style={Style.labelStyle}> Aadhar no</Text>
              </View>
              <TextInput
                onChangeText={handleChange('addharNumber')}
                disabled={loading}
                onBlur={handleBlur('addharNumber')}
                value={values.addharNumber}
                mode="outlined"
                outlineColor="#D1D1D1"
                activeOutlineColor="#D1D1D1"
                placeholder="Enter Addhar Number"
                cursorColor="black"
                placeholderTextColor="#898989"
                textColor="black"
                keyboardType="number-pad"
                outlineStyle={{
                  borderColor:
                    errors.addharNumber && touched.addharNumber
                      ? 'red'
                      : '#D1D1D1',
                  borderWidth: 1.5,
                  borderRadius: 10,
                  //   width: 170,
                }}
                style={{
                  backgroundColor: loading ? '#F5F5F5' : 'white',
                  opacity: loading ? 0.5 : 1,
                  fontFamily: 'Inter_18-Black',
                  fontWeight: '600',
                  //   width: 170,
                }}
              />
              {errors.addharNumber && touched.addharNumber ? (
                <Text style={Style.errorLabelStyle}>{errors.addharNumber}</Text>
              ) : null}
            </View>
          </View>
          <View style={Style.buttonContainer}>
            <TouchableOpacity
              onPress={handleSubmit as () => void}
              disabled={loading}
              style={[Style.submitButton, loading && {opacity: 0.6}]}>
              <Text style={Style.submitButtonText}>Create Account</Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={Style.loginPromptContainer}>
              <Text style={Style.loginPromptText}>
                Already have an account?{' '}
              </Text>
              <TouchableOpacity
                onPress={() => console.log('Navigate to Login')}>
                <Text style={Style.loginPromptButton}>Login Here</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

const Style = StyleSheet.create({
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
  buttonContainer: {
    // alignItems: 'center',
    // marginTop: 30,
    // width: 200,
  },

  submitButton: {
    backgroundColor: '#1E90FF', // Sky blue button
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
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
    color: '#1E90FF', // or any primary color
    fontFamily: 'Inter_18pt-SemiBold',
    marginLeft: 4,
    textDecorationLine: 'underline',
  },
});

export default RegisterForm;
