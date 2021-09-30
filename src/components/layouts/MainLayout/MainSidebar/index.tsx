// ! Delete this comment or delete component if its doesn't use
import { FC } from 'react';

import { RoutePathsEnum } from '../../../../configs/routes.config';
import { Link } from '../../../common/ui/Link';
import styles from './styles.module.scss';

export const MainSidebar: FC = () => {
  return (
    <nav className={styles.mainSidebar}>
      <ul>
        <li>
          <Link
            to={RoutePathsEnum.MAIN_DASHBOARD}
            id="main-sidebar-link-to-dashboard"
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to={RoutePathsEnum.MAIN_SETTINGS}
            id="main-sidebar-link-to-settings"
          >
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};
