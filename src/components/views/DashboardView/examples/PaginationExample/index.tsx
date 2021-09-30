// ! Delete this comment or delete component if its doesn't use
import { FC } from 'react';

import { PaginationSelected } from '../../../../../typings/components/pagination.types';
import { Pagination } from '../../../../common/ui/Pagination';

type Props = {
  page: number;

  changePageExample: (page: number) => void;
};

export const PaginationExample: FC<Props> = (props) => {
  const { changePageExample, page } = props;

  const changePageHandler = ({ selected }: PaginationSelected) => {
    changePageExample(selected);
  };

  return (
    <div>
      <div>{page + 1}</div>

      <Pagination
        onPageChange={changePageHandler}
        initialPage={page}
        id="example-pagination"
      />
    </div>
  );
};
