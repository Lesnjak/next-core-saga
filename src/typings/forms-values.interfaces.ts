export interface ISignInFormValues {
  password: string;
  email: string;
}

export interface ISignUpFormValues {
  confirmPassword: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

export interface IResetPasswordFormValues {
  email: string;
}

export interface INewPasswordFormValues {
  confirmPassword: string;
  newPassword: string;
}
