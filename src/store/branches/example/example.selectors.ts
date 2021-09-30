import { RootState } from '../../root.state';
import {
  ICountState,
  IExampleBranchState,
  IInfiniteState,
  IPaginationState,
} from './example.types';

export const exampleStateSelector = (state: RootState): IExampleBranchState =>
  state.example;

export const infiniteListSelector = (
  state: RootState
): IInfiniteState['infiniteList'] => state.example.infiniteState.infiniteList;

export const countSelector = (state: RootState): ICountState['count'] =>
  state.example.countState.count;

export const paginationExamplePageSelector = (
  state: RootState
): IPaginationState['page'] => state.example.paginationState.page;
