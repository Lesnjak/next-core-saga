// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import { FC } from 'react';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';

import { PaginationSelected } from '../../../../typings/components/pagination.types';
import styles from './styles.module.scss';

type Props = {
  containerClassName?: string;
  wrapperClassName?: string;
  customOptions?: ReactPaginateProps;
  initialPage: number;
  id: string;

  onPageChange: (data: PaginationSelected) => void;
};

export const Pagination: FC<Props> = (props) => {
  const {
    containerClassName,
    wrapperClassName,
    customOptions,
    onPageChange,
    initialPage,
    id,
  } = props;

  return (
    <div
      className={cn(styles.paginateWrapper, wrapperClassName)}
      id={`pagination-${id}`}
    >
      <ReactPaginate
        disableInitialCallback
        previousLinkClassName={styles.paginationContainer__previous}
        marginPagesDisplayed={2}
        activeLinkClassName={styles.paginationContainer__activeLink}
        containerClassName={cn(styles.paginationContainer, containerClassName)}
        breakLinkClassName={styles.paginationContainer__labelLink}
        pageRangeDisplayed={2}
        disabledClassName={styles.paginationContainer__linkDisabled}
        nextLinkClassName={styles.paginationContainer__next}
        pageLinkClassName={styles.paginationContainer__link}
        activeClassName={styles.paginationContainer__active}
        pageClassName={styles.paginationContainer__list}
        previousLabel={'<'}
        onPageChange={onPageChange}
        forcePage={initialPage}
        nextLabel={'>'}
        pageCount={6}
        {...customOptions}
      />
    </div>
  );
};
