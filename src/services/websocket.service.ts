import io from 'socket.io-client';

import AuthService from './auth-client-side.service';

export interface IWebSocketService {
  disconnect: () => void;
  connect: (callback: (err: any, result: any) => void) => void;
}

let websocketConnection: SocketIOClient.Socket | null;

export const WebSocketService = (): IWebSocketService => {
  const connect = (callback: (err: any, result: any) => void) => {
    if (!AuthService.getAccessToken()) {
      console.debug(
        'Could not start websocket because client was not authenticated.'
      );

      return;
    }

    if (websocketConnection) {
      disconnect();
    }

    const options: SocketIOClient.ConnectOpts = {
      transports: ['polling', 'websocket'],
      path: process.env.BACKEND_SOCKET_PATH,
    };

    websocketConnection = io.connect(
      process.env.BACKEND_SOCKET_ENDPOINT as string,
      options
    );

    if (websocketConnection) {
      websocketConnection.on('connect', () => {
        console.debug('Websocket is successfully connected.');

        callback(null, websocketConnection);
      });
    }
  };

  const disconnect = () => {
    console.debug('Disconnecting websocket...');

    if (!websocketConnection) {
      return;
    }

    websocketConnection.removeAllListeners();
    websocketConnection.disconnect();
    websocketConnection = null;
  };

  return {
    disconnect,
    connect,
  };
};
