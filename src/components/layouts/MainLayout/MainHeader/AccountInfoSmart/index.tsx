// ! Delete this comment or delete component if its doesn't use
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { accountSelector } from '../../../../../store/branches/account/account.selectors';
import { paletteSelector } from '../../../../../store/branches/app/app.selectors';
import { Palette } from '../../../../../store/branches/app/app.types';
import {
  appActions,
  authActions,
} from '../../../../../store/collected.actions';
import { AccountInfo } from '../../../../common/AccountInfo';

export const AccountInfoSmart: FC = () => {
  const dispatch = useDispatch();
  const account = useSelector(accountSelector);
  const palette = useSelector(paletteSelector);

  return (
    <AccountInfo
      onSetPalette={(palette: Palette) =>
        dispatch(appActions.setPalette(palette))
      }
      onSignOut={() => dispatch(authActions.signOut())}
      account={account}
      palette={palette}
    />
  );
};
