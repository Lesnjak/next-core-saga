import * as Yup from 'yup';

import {
  INewPasswordFormValues,
  ISignUpFormValues,
} from '../typings/forms-values.interfaces';
import { nameOf } from '../utils/name-of';
import validationService from './form-fields.validation';

export const signInFormValidation = (): Yup.ObjectSchema<
  Record<string, any>
> => {
  return Yup.object().shape({
    password: validationService.vPassword(),
    email: validationService.vEmail(),
  });
};

export const signUpFormValidation = (): Yup.ObjectSchema<
  Record<string, any>
> => {
  return Yup.object().shape({
    confirmPassword: validationService.vConfirmPassword(
      nameOf<ISignUpFormValues>('password')
    ),
    firstName: validationService.vFirstName(),
    password: validationService.vPassword(),
    lastName: validationService.vLastName(),
    email: validationService.vEmail(),
  });
};

export const resetPasswordFormValidation = (): Yup.ObjectSchema<
  Record<string, any>
> => {
  return Yup.object().shape({
    email: validationService.vEmail(),
  });
};

export const newPasswordFormValidation = (): Yup.ObjectSchema<
  Record<string, any>
> => {
  return Yup.object().shape({
    confirmPassword: validationService.vConfirmPassword(
      nameOf<INewPasswordFormValues>('newPassword')
    ),
    newPassword: validationService.vPassword(),
  });
};

export const exampleFormValidation = (): Yup.ObjectSchema<
  Record<string, any>
> => {
  return Yup.object().shape({
    email: Yup.string().email('Email not valid').required('Email is required'),
    password: Yup.string().required('Password is required'),
    datePicker: Yup.string().required('Date is required'),
    wysiwyg: Yup.string().required('is required'),
    upload: Yup.string().required('is required'),
  });
};

export const exampleModalFlowFormValidation = (): Yup.ObjectSchema<
  Record<string, any>
> => {
  return Yup.object().shape({
    lat: Yup.string().required('Latitude is required'),
    lon: Yup.string().required('Longitude is required'),
  });
};
