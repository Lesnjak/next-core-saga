import * as Yup from 'yup';

import * as REGEXPS from '../configs/regexps.config';

const vPassword = (): Yup.StringSchema<
  string | undefined,
  Record<string, unknown>
> => {
  return Yup.string()
    .matches(REGEXPS.PASSWORD_REGEXP, `Please enter a valid password`)
    .required('Password is required');
};

const vConfirmPassword = (
  fieldName: string
): Yup.StringSchema<string | undefined, Record<string, unknown>> => {
  return Yup.string()
    .oneOf([Yup.ref(fieldName)], 'Passwords must match')
    .required('Password is required');
};

const vEmail = (): Yup.StringSchema<
  string | undefined,
  Record<string, unknown>
> => {
  return Yup.string().email('Email not valid').required('Email is required');
};

const vFirstName = (): Yup.StringSchema<
  string | undefined,
  Record<string, any>
> => {
  return Yup.string().required('First name is required');
};

const vLastName = (): Yup.StringSchema<
  string | undefined,
  Record<string, any>
> => {
  return Yup.string().required('Last name is required');
};

export default {
  vConfirmPassword,
  vFirstName,
  vLastName,
  vPassword,
  vEmail,
};
