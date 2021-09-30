// ! Delete this comment or delete component if its doesn't use
import { FC } from 'react';

import { LandingLayout } from '../../layouts/LandingLayout';
import { HomeSection } from './HomeSection';

export const LandingView: FC = () => {
  return (
    <LandingLayout>
      <HomeSection />
    </LandingLayout>
  );
};
