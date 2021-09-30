import React from 'react';

import { getLayout } from '../../components/layouts/AuthLayout';
import { SignInView } from '../../components/views/SignInView';
import { PagesTitlesEnum } from '../../configs/pages.config';
import { NextPageEnhanced } from '../../typings/app.types';

const SignInPage: NextPageEnhanced = () => {
  return <SignInView />;
};

SignInPage.getLayout = getLayout;
SignInPage.title = PagesTitlesEnum.AUTH_SIGN_IN;

export default SignInPage;
