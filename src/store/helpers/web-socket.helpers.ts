import { EventChannel } from 'redux-saga';
import {
  call,
  CallEffect,
  cancelled,
  CancelledEffect,
  fork,
  race,
  RaceEffect,
  take,
  TakeEffect,
} from 'redux-saga/effects';

/**
 * Fork params received from channel
 */
function* forkSagaFromChannel(
  channel: EventChannel<[Generator, ...any[]]>
): any {
  while (true) {
    try {
      const [saga, ...params] = yield take(channel);

      yield fork(saga, ...params);
    } catch {
      console.debug('[Saga]', 'Fork saga from event channel ERROR');
    }
  }
}

/**
 * Setup cancellable event channel. Channel is cancelled by dispatching cancelActionType
 */
export function setupForkEventChannel(
  eventChannelWatcher: (...args: any) => EventChannel<any>,
  eventChannelWatcherParams: any[],
  cancelActionType: string
) {
  return function* (): Generator<
    | CallEffect<EventChannel<any>>
    | RaceEffect<CallEffect<unknown> | TakeEffect>
    | CancelledEffect,
    void,
    any
  > {
    try {
      const channel = yield call(
        eventChannelWatcher,
        ...eventChannelWatcherParams
      );

      const { cancel } = yield race({
        task: call(forkSagaFromChannel, channel),
        cancel: take(cancelActionType),
      });

      if (cancel) {
        console.debug('[Saga]', 'Channel cancelled', cancelActionType);

        channel.close();
      }
    } catch (e) {
      console.debug('[Saga]', 'Saga event channel ERROR', e);
    } finally {
      if (yield cancelled()) {
        console.debug('[Saga]', 'Channel cancelled');
      }
    }
  };
}
