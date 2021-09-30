// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import { FC } from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';
import RatingComponent from 'react-rating';

import { ReactIcon } from '../../ReactIcon';
import styles from './styles.module.scss';

type Props = {
  className?: string;
  value: number;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  id: string;

  onChange: (number: number) => void;
};

export const Rating: FC<Props> = (props) => {
  const { className, onChange, value, size, id } = props;

  return (
    <div className={cn(styles.rating, className)} id={id}>
      <RatingComponent
        initialRating={value}
        emptySymbol={
          <ReactIcon size={size}>
            <IoIosStarOutline />
          </ReactIcon>
        }
        fullSymbol={
          <ReactIcon>
            <IoIosStar size={size} />
          </ReactIcon>
        }
        onChange={onChange}
      />
    </div>
  );
};
