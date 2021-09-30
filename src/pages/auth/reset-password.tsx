import React from 'react';

import { getLayout } from '../../components/layouts/AuthLayout';
import { ResetPasswordView } from '../../components/views/ResetPasswordView';
import { PagesTitlesEnum } from '../../configs/pages.config';
import { NextPageEnhanced } from '../../typings/app.types';

const ResetPasswordPage: NextPageEnhanced = () => {
  return <ResetPasswordView />;
};

ResetPasswordPage.getLayout = getLayout;
ResetPasswordPage.title = PagesTitlesEnum.AUTH_RESET_PASSWORD;

export default ResetPasswordPage;
