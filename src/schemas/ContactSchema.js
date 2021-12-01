import * as Yup from 'yup';

export const ContactSchema = Yup.object().shape({
  email: Yup.string().email('Email is invalid.').required('Email is required.')
});
