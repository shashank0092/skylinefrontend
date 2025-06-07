import * as Yup from 'yup';

export const LoginValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Mandatory Field'),
  password: Yup.string().required('Mandatory Field'),
});
