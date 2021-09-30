import React from 'react';

import { getLayout } from '../../components/layouts/AuthLayout';
import { NewPasswordView } from '../../components/views/NewPasswordView';
import { PagesTitlesEnum } from '../../configs/pages.config';
import { wrapper } from '../../store';
import { NextPageEnhanced } from '../../typings/app.types';
import { sspRedirect } from '../../utils/redirect';
import { GetSSPContext } from '../../utils/with-auth';

type Props = {
  token: string | null;
};

const NewPasswordPage: NextPageEnhanced<Props> = (props) => {
  const { token } = props;

  return token ? <NewPasswordView token={token} /> : null;
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

NewPasswordPage.getLayout = getLayout;
NewPasswordPage.title = PagesTitlesEnum.AUTH_NEW_PASSWORD;

export default NewPasswordPage;
