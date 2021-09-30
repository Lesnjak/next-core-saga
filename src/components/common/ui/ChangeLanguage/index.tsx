// ! Delete this comment or delete component if its doesn't use
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { FC } from 'react';

import i18nConfig from '../../../../../i18n';
import styles from './styles.module.scss';

const { locales } = i18nConfig;

type Props = {
  linkTo?: string;
  id: string;
};

export const ChangeLanguage: FC<Props> = (props) => {
  const { linkTo, id } = props;

  const { t, lang } = useTranslation('common');

  return (
    <div className={styles.changeLanguage} id={id}>
      {locales.map((lng) => {
        if (lng === lang) return null;

        return (
          <Link href={linkTo || '/'} locale={lng} key={lng}>
            {t(`layout.language-name-${lng}`)}
          </Link>
        );
      })}
    </div>
  );
};
