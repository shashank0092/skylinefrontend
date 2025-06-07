/* eslint-disable react-native/no-inline-styles */
import {Formik} from 'formik';
import {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import {ReportValidationSchems} from './ReportValidation';

const ReportForm = () => {
  const [loading, _] = useState(false);
  return (
    <Formik
      initialValues={{
        userId: '',
        description: '',
      }}
      validationSchema={ReportValidationSchems}
      onSubmit={values => {
        console.log('Login form submitted:', values);
      }}>
      {({handleChange, handleBlur, touched, errors, handleSubmit, values}) => (
        <View style={{display: 'flex', gap: 20}}>
          <View>
            <Text style={styles.labelStyle}>User Id</Text>
            <TextInput
              onChangeText={handleChange('userId')}
              disabled={loading}
              onBlur={handleBlur('userId')}
              value={values.userId}
              mode="outlined"
              placeholder="Enter User Id"
              cursorColor="black"
              placeholderTextColor="#898989"
              textColor="black"
              outlineColor="#D1D1D1"
              activeOutlineColor="#D1D1D1"
              outlineStyle={{
                borderColor:
                  errors.userId && touched.userId ? 'red' : '#D1D1D1',
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
            {errors.userId && touched.userId ? (
              <Text style={styles.errorLabelStyle}>{errors.userId}</Text>
            ) : null}
          </View>
          <View>
            <Text style={styles.labelStyle}>Descripton</Text>
            <TextInput
              multiline
              onChangeText={handleChange('description')}
              disabled={loading}
              onBlur={handleBlur('description')}
              value={values.description}
              mode="outlined"
              placeholder="Enter Your issue"
              cursorColor="black"
              placeholderTextColor="#898989"
              textColor="black"
              outlineColor="#D1D1D1"
              activeOutlineColor="#D1D1D1"
              outlineStyle={{
                borderColor:
                  errors.description && touched.description ? 'red' : '#D1D1D1',
                borderWidth: 1.5,
                borderRadius: 10,
                height: 200,
              }}
              style={{
                backgroundColor: loading ? '#F5F5F5' : 'white',
                opacity: loading ? 0.5 : 1,
                fontFamily: 'Inter_18-Black',
                fontWeight: '600',
                height: 200,
              }}
            />
            {errors.description && touched.description ? (
              <Text style={styles.errorLabelStyle}>{errors.description}</Text>
            ) : null}
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={handleSubmit as () => void}
              disabled={loading}
              style={[styles.submitButton, loading && {opacity: 0.6}]}>
              <Text style={styles.submitButtonText}>Create an issue</Text>
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
    color: '#1E90FF',
    fontFamily: 'Inter_18pt-SemiBold',
    marginLeft: 4,
    textDecorationLine: 'underline',
  },
});

export default ReportForm;
