export interface IPageConfig {
  bodyBackgroundColor?: string;
}

export interface IPagesCommonConfig {
  [path: string]: IPageConfig;
}
