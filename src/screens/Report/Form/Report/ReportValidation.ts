import * as yup from 'yup';

export const ReportValidationSchems = yup.object({
  userId: yup.string().required('Mandatory Field'),
  description: yup.string().required('Mandatory Field'),
});
