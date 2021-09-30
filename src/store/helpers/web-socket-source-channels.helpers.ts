import { END, eventChannel, EventChannel } from 'redux-saga';

import { WebSocketEventNamesEnum } from '../ws/web-socket.types';

/**
 * Setup custom event channel.
 */
export function setEventChannel<T>(
  eventSource: SocketIOClient.Socket,
  socketEventName: WebSocketEventNamesEnum,
  onEmit: Array<(...params: any[]) => Generator<unknown, any, unknown>>
): EventChannel<[(...params: any[]) => Generator, ...any[]]> {
  return eventChannel((emit) => {
    eventSource.on(WebSocketEventNamesEnum[socketEventName], (data: T) => {
      onEmit.map((handler) => emit([handler, data]));
    });

    eventSource.once('error', (err: any) => {
      console.error(
        'Websocket error in the connection. Closing websocket...',
        err
      );

      emit(END);
    });

    return () => {
      eventSource.off(WebSocketEventNamesEnum[socketEventName]);
      eventSource.off('error');
    };
  });
}
