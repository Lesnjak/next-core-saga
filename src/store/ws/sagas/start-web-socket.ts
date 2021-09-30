import { EventChannel } from 'redux-saga';
import {
  all,
  call,
  CallEffect,
  cps,
  CpsEffect,
  fork,
  put,
  PutEffect,
  select,
  SelectEffect,
} from 'redux-saga/effects';

import {
  IWebSocketService,
  WebSocketService,
} from '../../../services/websocket.service';
import { authTokenSelector } from '../../branches/auth/auth.selectors';
import { setupForkEventChannel } from '../../helpers/web-socket.helpers';
import * as sourceChannels from '../../ws-source-channels/sagas';
import { WebSocketEventNamesEnum } from '../web-socket.types';

let webSocketService: IWebSocketService;

function initSocketListeners(socket: SocketIOClient.Socket) {
  return function* () {
    try {
      const watchers: Array<
        (
          socket: SocketIOClient.Socket
        ) => EventChannel<[(...params: any[]) => Generator, ...any[]]>
      > = [
        sourceChannels.handleExampleChange, // example change handling
        // Other source channels (web socket events) put below
      ];

      yield all(
        watchers.map((watcher) => {
          return fork(
            setupForkEventChannel(
              watcher,
              [socket],
              WebSocketEventNamesEnum.CLOSE_SOCKET_LISTENERS
            )
          );
        })
      );
    } catch {
      console.debug('[WS]', 'Init socket listeners ERROR');
    }
  };
}

export function* createWebsocketAndInitializeListeners(): Generator<
  SelectEffect | CpsEffect<void> | CallEffect<void>,
  void,
  SocketIOClient.Socket
> {
  try {
    const token = yield select(authTokenSelector);

    if (token) {
      if (webSocketService) {
        webSocketService.disconnect();
      }

      return;
    }

    webSocketService = WebSocketService();

    const transactionEventSource: SocketIOClient.Socket = yield cps(
      webSocketService.connect
    );

    yield call(initSocketListeners(transactionEventSource));
  } catch {
    console.debug('[WS]', 'Create ws and init listeners ERROR');
  }
}

export function* disconnectWebsocket(): Generator<
  PutEffect<{
    type: WebSocketEventNamesEnum;
  }>,
  void,
  unknown
> {
  try {
    yield put({ type: WebSocketEventNamesEnum.CLOSE_SOCKET_LISTENERS });

    if (webSocketService) {
      webSocketService.disconnect();
    }
  } catch {
    console.debug('[WS]', 'Disconnect ws and close socket listeners ERROR');
  }
}
