// ! Delete this comment or delete component if its doesn't use
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { FC } from 'react';

import * as notificationsService from '../../../../services/notifications.service';
import { ContentLimiter } from '../../../common/ContentLimiter';
import { Typography } from '../../../common/Typography';
import { Button } from '../../../common/ui/Button';
import styles from './styles.module.scss';

export const HomeSection: FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.homeSection}>
      <ContentLimiter>
        <Typography variant="h1" align="center">
          {t('pages.landing.title')}
        </Typography>

        <ul>
          <li>
            <Link href="/auth/sign-in">
              <a>Sign in</a>
            </Link>
          </li>

          <li>
            <Link href="/auth/sign-up">
              <a>Sign up</a>
            </Link>
          </li>

          <li>
            <Link href="/auth/new-password">
              <a>New password</a>
            </Link>
          </li>

          <li>
            <Link href="/auth/reset-password">
              <a>Reset password</a>
            </Link>
          </li>

          <li>
            <Link href="/main/dashboard">
              <a>Dashboard</a>
            </Link>
          </li>
        </ul>

        <Button
          onClick={() =>
            notificationsService.successMsg('Message was sent successfully', {
              dismiss: {
                duration: 5000,
                onScreen: true,
              },
            })
          }
          id="button-test-toast"
        >
          Test notification
        </Button>
      </ContentLimiter>
    </div>
  );
};
