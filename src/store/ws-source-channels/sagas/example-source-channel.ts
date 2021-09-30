import { EventChannel } from 'redux-saga';
import { put } from 'redux-saga/effects';

import { IAccountWSUpdateDto } from '../../../typings/backend/ws-dto';
import { logger } from '../../../utils/logger';
import { accountActions } from '../../collected.actions';
import { setEventChannel } from '../../helpers/web-socket-source-channels.helpers';
import { WebSocketEventNamesEnum } from '../../ws/web-socket.types';

function* onExampleChange(data: IAccountWSUpdateDto) {
  try {
    // @TODO: Put action with data via ws update
    yield put(accountActions.getAccountWS$update(data));
  } catch {
    yield logger("Couldn't update account by ws.");
  }
}

export const handleExampleChange = (
  eventSource: SocketIOClient.Socket
): EventChannel<[(...params: any[]) => Generator, ...any[]]> => {
  return setEventChannel<IAccountWSUpdateDto>(
    eventSource,
    WebSocketEventNamesEnum.EXAMPLE_EVENT_NAME,
    [onExampleChange]
  );
};
