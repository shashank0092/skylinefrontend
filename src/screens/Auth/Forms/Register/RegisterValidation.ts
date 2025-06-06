import * as yup from 'yup';

export const RegisterValidationSchema = yup.object({
  name: yup.string().required('Mandatory Field'),
  email: yup.string().email('Enter valid email').required('Mandatory Field'),
  password: yup.string().required('Mandatory Field'),
  gender: yup
    .string()
    .oneOf(['man', 'women', 'other'])
    .required('Gender is required'),
  addharNumber: yup.string().required('Mandatory Field'),
});
