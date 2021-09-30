import { createAction } from '@reduxjs/toolkit';

import { createReqErrorAction } from '../../helpers/actions.helpers';
import {
  INewPasswordReqPayload,
  IResetPasswordReqPayload,
  ISignInReqPayload,
  ISignUpReqPayload,
  IVerifyEmailReqPayload,
} from './auth.types';

const a = (actionPiece: string) => `@ll/auth/${actionPiece}`;

export const authExtraActions = {
  signInReq$error: createReqErrorAction(a('signInReq$error')),
  signInReq: createAction<ISignInReqPayload>(a('signInReq')),

  signUpReq$error: createReqErrorAction(a('signUpReq$error')),
  signUpReq: createAction<ISignUpReqPayload>(a('signUpReq')),

  signOut: createAction(a('signOut')),

  verifyEmailReq$error: createReqErrorAction(a('verifyEmailReq$error')),
  verifyEmailReq: createAction<IVerifyEmailReqPayload>(a('verifyEmailReq')),

  resetPasswordReq$error: createReqErrorAction(a('resetPasswordReq$error')),
  resetPasswordReq: createAction<IResetPasswordReqPayload>(
    a('resetPasswordReq')
  ),

  newPasswordReq$error: createReqErrorAction(a('newPasswordReq$error')),
  newPasswordReq: createAction<INewPasswordReqPayload>(a('newPasswordReq')),
};
