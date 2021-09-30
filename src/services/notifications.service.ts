import upperFirst from 'lodash/upperFirst';
import { ReactNotificationOptions, store } from 'react-notifications-component';

/**
 * To customize notifications please check https://www.npmjs.com/package/react-notifications-component
 * and https://teodosii.github.io/react-notifications-component/
 */
export enum NotificationTypesEnum {
  SUCCESS = 'success',
  DEFAULT = 'default',
  WARNING = 'warning',
  ERROR = 'danger',
  INFO = 'info',
}

/**
 * Notification common action creator
 */
const notify = (
  message: string,
  type: NotificationTypesEnum,
  params?: Partial<ReactNotificationOptions>
) => {
  store.addNotification({
    title:
      type === NotificationTypesEnum.ERROR
        ? upperFirst('error')
        : upperFirst(type),
    message,
    type,
    insert: 'bottom',
    container: 'bottom-right',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    // dismiss: {
    //   duration: 5000,
    //   onScreen: true,
    // },
    ...params,
  });
};

/**
 * Default msg
 */
export const defaultMsg = (
  message: string,
  params?: Partial<ReactNotificationOptions>
): void => {
  notify(message, NotificationTypesEnum.DEFAULT, params);
};

/**
 * Info msg
 */
export const infoMsg = (
  message: string,
  params?: Partial<ReactNotificationOptions>
): void => {
  notify(message, NotificationTypesEnum.INFO, params);
};

/**
 * Success msg
 */
export const successMsg = (
  message: string,
  params?: Partial<ReactNotificationOptions>
): void => {
  notify(message, NotificationTypesEnum.SUCCESS, params);
};

/**
 * Warning msg
 */
export const warningMsg = (
  message: string,
  params?: Partial<ReactNotificationOptions>
): void => {
  notify(message, NotificationTypesEnum.WARNING, params);
};

/**
 * Error msg
 */
export const errorMsg = (
  message: string,
  params?: Partial<ReactNotificationOptions>
): void => {
  notify(message, NotificationTypesEnum.ERROR, params);
};
