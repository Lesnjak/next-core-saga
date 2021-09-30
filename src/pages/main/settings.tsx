import React from 'react';

import { getLayout } from '../../components/layouts/MainLayout';
import { SettingsView } from '../../components/views/SettingsView';
import { PagesTitlesEnum } from '../../configs/pages.config';
import { NextPageEnhanced } from '../../typings/app.types';

const SettingsPage: NextPageEnhanced = () => {
  return <SettingsView />;
};

SettingsPage.getLayout = getLayout;
SettingsPage.title = PagesTitlesEnum.MAIN_SETTINGS;

export default SettingsPage;
