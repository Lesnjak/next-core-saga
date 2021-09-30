// ! Delete this comment or delete component if its doesn't use
import { FC } from 'react';

import { Typography } from '../../common/Typography';
import styles from './styles.module.scss';

export const SettingsView: FC = () => {
  return (
    <div className={styles.settingsView}>
      <Typography>Settings</Typography>
    </div>
  );
};
