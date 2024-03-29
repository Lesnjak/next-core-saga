// ! Delete this comment or delete component if its doesn't use
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { infiniteListSelector } from '../../../../../store/branches/example/example.selectors';
import { exampleActions } from '../../../../../store/collected.actions';
import { InfiniteScroll } from '../../../../common/InfiniteScroll';

export const InfiniteScrollExampleSmart: FC = () => {
  const dispatch = useDispatch();
  const infiniteList = useSelector(infiniteListSelector);

  useEffect(() => {
    setTimeout(() => {
      dispatch(exampleActions.infiniteScrollExampleReq());
    }, 3000);
  }, [dispatch]);

  const handleScroll = () => {
    setTimeout(() => {
      dispatch(exampleActions.infiniteScrollExampleReq());
    }, 1500);
  };

  return (
    <InfiniteScroll
      handleScroll={handleScroll}
      infiniteList={infiniteList}
      mainQuantity={24}
    />
  );
};
