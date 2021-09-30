import React from 'react';

import { getLayout } from '../../components/layouts/MainLayout';
import { DashboardView } from '../../components/views/DashboardView';
import { PagesTitlesEnum } from '../../configs/pages.config';
import { wrapper } from '../../store';
import { NextPageEnhanced } from '../../typings/app.types';
import { GetSSPContext, withAuth } from '../../utils/with-auth';

const DashboardPage: NextPageEnhanced = () => {
  return <DashboardView />;
};

DashboardPage.getLayout = getLayout;
DashboardPage.title = PagesTitlesEnum.MAIN_DASHBOARD;

export const getServerSideProps = wrapper.getServerSideProps(
  async (context: GetSSPContext) => {
    const withAuthResults = await withAuth(context, {
      needAccessToken: true,
      needAccount: true,
    });

    if (withAuthResults) {
      return withAuthResults;
    }

    return { props: {} };
  }
);

export default DashboardPage;
