// ! Delete this comment or delete component if its doesn't use
import { FC } from 'react';

import { AuthPagesTypesEnum } from '../../../../configs/auth.config';
import { RoutePathsEnum } from '../../../../configs/routes.config';
import { ContentLimiter } from '../../../common/ContentLimiter';
import { Logo } from '../../../common/Logo';
import { LinkButton } from '../../../common/ui/LinkButton';
import styles from './styles.module.scss';

type Props = {
  page: AuthPagesTypesEnum | null;
};

export const AuthHeader: FC<Props> = (props) => {
  const { page } = props;

  return (
    <header className={styles.authHeader}>
      <ContentLimiter>
        <div className={styles.authHeader__content}>
          <Logo />

          <div className={styles.authHeader__rightBlock}>
            {page === AuthPagesTypesEnum.SIGN_IN && (
              <LinkButton
                variant="outlined"
                height="sm"
                width="content"
                to={RoutePathsEnum.AUTH_SIGN_UP}
                id="auth-sign-up-link"
              >
                Sign up
              </LinkButton>
            )}
          </div>
        </div>
      </ContentLimiter>
    </header>
  );
};
