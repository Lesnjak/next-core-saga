/**
 * Check server side
 */
export const isServer = (): boolean => {
  return typeof window === 'undefined';
};
