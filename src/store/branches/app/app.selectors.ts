import { RootState } from '../../root.state';
import { IAppBranchState } from './app.types';

export const appStateSelector = (state: RootState): IAppBranchState =>
  state.app;

export const paletteSelector = (state: RootState): IAppBranchState['palette'] =>
  state.app.palette;
