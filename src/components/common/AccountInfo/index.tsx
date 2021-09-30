// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import noop from 'lodash/noop';
import { FC, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { GiCeilingLight } from 'react-icons/gi';
import { TiArrowSortedDown } from 'react-icons/ti';

import {
  Palette,
  PaletteTypesEnum,
} from '../../../store/branches/app/app.types';
import { IAccount } from '../../../typings/backend/entities/account.entity';
import { Avatar } from '../Avatar';
import { DropdownMenu } from '../DropdownMenu';
import { ReactIcon } from '../ReactIcon';
import { Typography } from '../Typography';
import { Switch } from '../ui/Switch';
import styles from './styles.module.scss';

type Props = {
  className?: string;
  account: IAccount;
  palette: Palette;

  onSetPalette: (palette: Palette) => void;
  onSignOut: () => void;
};

export const AccountInfo: FC<Props> = (props) => {
  const { className, onSetPalette, account, onSignOut, palette } = props;

  const [dropdownOpen, toggleDropdown] = useState(false);

  const handleChange = () => {
    onSetPalette(
      palette === PaletteTypesEnum.LIGHT
        ? PaletteTypesEnum.DARK
        : PaletteTypesEnum.LIGHT
    );
  };

  const handleToggleDropdown = (value: boolean) => {
    toggleDropdown(value);
  };

  const collapseIconClass = cn(styles.collapseIcon, {
    [styles['collapseIcon_open']]: dropdownOpen,
  });

  return (
    <DropdownMenu
      onOutsideClick={handleToggleDropdown}
      className={className}
      button={
        <div
          className={styles.accountInfo}
          onClick={() => handleToggleDropdown(true)}
        >
          <Avatar id="account-info-avatar" />

          <Typography
            className={styles.accountInfo__name}
            variant="body2"
            color="textDark"
            noWrap
          >
            {account.firstName}
          </Typography>

          <ReactIcon
            className={collapseIconClass}
            color="primaryDark"
            size="md"
          >
            <TiArrowSortedDown />
          </ReactIcon>
        </div>
      }
      open={dropdownOpen}
    >
      <div className={styles.accountInfo__menu}>
        <div
          className={styles.accountInfo__menuItem}
          onClick={handleChange}
          id="account-menu-palette-switch-item"
        >
          <ReactIcon size="lg" color="primaryDark">
            <GiCeilingLight />
          </ReactIcon>

          <Typography color="textDark">Dark mode</Typography>
          <Switch
            disabled
            onChange={noop}
            value={palette === PaletteTypesEnum.DARK ? true : false}
            name="darkModeSwitcher"
            size="sm"
            id="dark-mode-switcher"
          />
        </div>

        <div
          className={styles.accountInfo__menuItem}
          onClick={onSignOut}
          id="account-menu-sign-out-item"
        >
          <ReactIcon size="lg" color="primaryDark">
            <FiLogOut />
          </ReactIcon>

          <Typography color="textDark">Log out</Typography>
        </div>
      </div>
    </DropdownMenu>
  );
};
