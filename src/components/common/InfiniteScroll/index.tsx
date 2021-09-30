// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import { FC } from 'react';
import InfiniteScrollComponent from 'react-infinite-scroll-component';

import { IInfiniteListItem } from '../../../store/branches/example/example.types';
import { Loader } from '../Loader';
import styles from './styles.module.scss';

type Props = {
  // TODO: Add logic to put custom listItem type
  infiniteList: IInfiniteListItem[];
  mainQuantity: number;
  className?: string;

  handleScroll: () => void;
};

export const InfiniteScroll: FC<Props> = (props) => {
  const { handleScroll, mainQuantity, className, infiniteList } = props;

  return (
    <div id="scrollableDiv" className={cn(styles.infiniteContainer, className)}>
      <InfiniteScrollComponent
        scrollableTarget="scrollableDiv"
        dataLength={infiniteList.length}
        className={styles.infiniteContainer__wrapper}
        hasMore={infiniteList.length < mainQuantity}
        loader={
          <div className={styles.infiniteContainer__loader}>
            <Loader size="sm" />
          </div>
        }
        next={handleScroll}
      >
        {infiniteList.map((object: any, index: number) => (
          <div className={styles.infiniteContainer__item} key={index}>
            {/* TODO: Add render custom listItem type */}
            {object.title} - #{index}
          </div>
        ))}
      </InfiniteScrollComponent>
      {/* TODO: Add button "Load more" logic */}
    </div>
  );
};
