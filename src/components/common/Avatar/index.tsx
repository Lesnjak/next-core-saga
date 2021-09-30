// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import isNumber from 'lodash/isNumber';
import isString from 'lodash/isString';
import { FC } from 'react';

import styles from './styles.module.scss';

type Props = {
  withBorder?: boolean;
  className?: string;
  avatar?: string;
  size?: 'xs' | 'sm' | 'lg' | number;
  id: string;

  onClick?: () => void;
};

export const Avatar: FC<Props> = (props) => {
  const { withBorder, className, onClick, avatar, size = 'xs', id } = props;

  const avatarClass = cn(
    styles.avatar,
    {
      [styles.avatar_withBorder]: withBorder,
      [styles.avatar_withClick]: onClick,
      ...(isString(size) && { [styles[`avatar_${size}`]]: size }),
    },
    className
  );

  return (
    <div
      className={avatarClass}
      onClick={onClick ? onClick : undefined}
      style={
        isNumber(size)
          ? {
              height: size,
              width: size,
            }
          : {}
      }
      id={id}
    >
      <img
        className="img-cover"
        src={
          avatar ||
          'https://f0.pngfuel.com/png/980/886/male-portrait-avatar-png-clip-art.png'
        }
        alt="account-avatar"
      />
    </div>
  );
};
