export interface ISignInReqDto {
  password: string;
  email: string;
}

export interface ISignUpReqDto {
  confirmPassword: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

export interface IResetPasswordReqDto {
  email: string;
}

export interface INewPasswordReqDto {
  confirmPassword: string;
  newPassword: string;
  token: string;
}
