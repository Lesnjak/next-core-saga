// ! Delete this comment or delete component if its doesn't use
import { FC } from 'react';

import { RoutePathsEnum } from '../../../../configs/routes.config';
import { ContentLimiter } from '../../../common/ContentLimiter';
import { Logo } from '../../../common/Logo';
import { ChangeLanguage } from '../../../common/ui/ChangeLanguage';
import { LinkButton } from '../../../common/ui/LinkButton';
import styles from './styles.module.scss';

export const LandingHeader: FC = () => {
  return (
    <header className={styles.landingHeader}>
      <ContentLimiter>
        <div className={styles.landingHeader__content}>
          <Logo />

          <div className={styles.landingHeader__rightBlock}>
            <ChangeLanguage id="landing-header-change-language" />

            <LinkButton
              className={styles.landingHeader__signUpButton}
              variant="outlined"
              height="sm"
              width="content"
              to={RoutePathsEnum.AUTH_SIGN_UP}
              id="landing-sign-up-link"
            >
              Sign up
            </LinkButton>

            <LinkButton
              variant="contained"
              height="sm"
              width="content"
              to={RoutePathsEnum.AUTH_SIGN_IN}
              id="landing-sign-up-link"
            >
              Sign in
            </LinkButton>
          </div>
        </div>
      </ContentLimiter>
    </header>
  );
};
