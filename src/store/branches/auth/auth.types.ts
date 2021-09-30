import {
  INewPasswordFormValues,
  IResetPasswordFormValues,
  ISignInFormValues,
  ISignUpFormValues,
} from '../../../typings/forms-values.interfaces';

export interface IAuthBranchState {
  token: string | null | undefined;
}

export interface ISignInReqPayload {
  onSuccess?: () => void;
  onError: (res: Record<string, any>) => void;
  data: { values: ISignInFormValues };
}

export interface ISignUpReqPayload {
  onSuccess: () => void;
  onError: (res: Record<string, any>) => void;
  data: { values: ISignUpFormValues };
}

export interface IVerifyEmailReqPayload {
  onSuccess: () => void;
  onError: (res: Record<string, any>) => void;
  data: { token: string };
}

export interface IResetPasswordReqPayload {
  onSuccess: () => void;
  onError: (res: Record<string, any>) => void;
  data: { values: IResetPasswordFormValues };
}

export interface INewPasswordReqPayload {
  onSuccess: () => void;
  onError: (res: Record<string, any>) => void;
  data: { values: INewPasswordFormValues; token: string };
}
