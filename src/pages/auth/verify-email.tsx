import React from 'react';

import { getLayout } from '../../components/layouts/AuthLayout';
import { VerifyEmailView } from '../../components/views/VerifyEmailView';
import { PagesTitlesEnum } from '../../configs/pages.config';
import { wrapper } from '../../store';
import { NextPageEnhanced } from '../../typings/app.types';
import { sspRedirect } from '../../utils/redirect';
import { GetSSPContext } from '../../utils/with-auth';

type Props = {
  token: string | null;
};

const VerifyEmailPage: NextPageEnhanced<Props> = (props) => {
  const { token } = props;

  return token ? <VerifyEmailView token={token} /> : null;
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context: GetSSPContext) => {
    if (!context.query.token) {
      return sspRedirect();
    }

    return {
      props: {
        token: (context.query.token as string) || null,
      },
    };
  }
);

VerifyEmailPage.getLayout = getLayout;
VerifyEmailPage.title = PagesTitlesEnum.AUTH_VERIFY_EMAIL;

export default VerifyEmailPage;
