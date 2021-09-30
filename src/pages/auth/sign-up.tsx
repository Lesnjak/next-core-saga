import React from 'react';

import { getLayout } from '../../components/layouts/AuthLayout';
import { SignUpView } from '../../components/views/SignUpView';
import { PagesTitlesEnum } from '../../configs/pages.config';
import { NextPageEnhanced } from '../../typings/app.types';

const SignUpPage: NextPageEnhanced = () => {
  return <SignUpView />;
};

SignUpPage.getLayout = getLayout;
SignUpPage.title = PagesTitlesEnum.AUTH_SIGN_UP;

export default SignUpPage;
