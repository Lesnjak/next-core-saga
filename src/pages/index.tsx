import { LandingView } from '../components/views/LandingView';
import { PagesTitlesEnum } from '../configs/pages.config';
import { NextPageEnhanced } from '../typings/app.types';

export const LandingPage: NextPageEnhanced = () => {
  return <LandingView />;
};

LandingPage.title = PagesTitlesEnum.HOME;

export default LandingPage;
