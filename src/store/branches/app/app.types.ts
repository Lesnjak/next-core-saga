export enum PaletteTypesEnum {
  LIGHT = 'light',
  DARK = 'dark',
}

export type Palette = PaletteTypesEnum | null;

export interface IAppBranchState {
  palette: Palette;
}
