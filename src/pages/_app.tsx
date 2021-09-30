import '../styles/index.scss';

import Head from 'next/head';
import Router from 'next/router';
import { Fragment, useEffect, useRef } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import ReactNotification from 'react-notifications-component';
import { useStore } from 'react-redux';
import LoadingBar from 'react-top-loading-bar';

import { AppLayout } from '../components/layouts/AppLayout';
import { TITLE_BASE_PREFIX } from '../configs/system.config';
import { useBodyBackground } from '../hooks/use-body-background';
import { usePersistLocaleCookie } from '../hooks/use-persist-locale-cookie';
import { usePersistPaletteLocalStorage } from '../hooks/use-persist-palette-local-storage';
import { ISagaStore, wrapper } from '../store';
import { appActions, authActions } from '../store/collected.actions';
import { AppProps, BarRef, Page } from '../typings/app.types';
import { isServer } from '../utils/is-server';
import { logger } from '../utils/logger';

const App = (appProps: AppProps) => {
  const { Component, pageProps } = appProps;

  const getLayout = Component.getLayout || ((page: Page) => page);
  const title = Component.title || '';

  const store = useStore() as ISagaStore;

  useEffect(() => {
    store.dispatch(appActions.initializeApp());
  }, [store]);

  let loader = useRef<BarRef>().current;
  // Set browser config when page is loading
  const browserConfig = () => {
    Router.events.on('routeChangeStart', () => {
      if (loader) {
        loader.continuousStart();
      }
    });

    Router.events.on('routeChangeComplete', () => {
      if (loader) {
        loader.complete();
      }

      const elements = document.getElementsByClassName('scroll');

      if (!elements.length) return;

      let i = 0;

      while (i < elements.length) {
        elements[i].scrollTop = 0;
        i++;
      }
    });

    Router.events.on('routeChangeError', () => {
      if (loader) {
        loader.complete();
      }
    });
  };
  // Set user idle checking
  const userIdleWatcher = () => {
    const handleOnIdle = () => {
      logger('User is idle');
      logger('Last active', getLastActiveTime());

      store.dispatch(authActions.signOut());
    };

    const handleOnActive = () => {
      logger('Time remaining', getRemainingTime());
    };

    const handleOnAction = () => {
      logger('User did something');
    };

    const { getRemainingTime, getLastActiveTime } = useIdleTimer({
      onActive: handleOnActive,
      onAction: handleOnAction,
      debounce: 500,
      timeout: 1000 * 60 * 60,
      onIdle: handleOnIdle,
    });
  };
  // Init browser config
  if (!isServer()) {
    usePersistPaletteLocalStorage();
    usePersistLocaleCookie();
    useBodyBackground();
    userIdleWatcher();
    browserConfig();
  }

  return (
    <Fragment>
      <Head>
        <title>{`${TITLE_BASE_PREFIX}${title && ` | ${title}`}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Fragment>
        <AppLayout>{getLayout(<Component {...pageProps} />)}</AppLayout>

        <div className="app__indicator-wrapper">
          <LoadingBar
            shadow={false}
            height={3}
            color="var(--secondaryLight)"
            ref={(ref: BarRef) => (loader = ref)}
          />
        </div>
        <ReactNotification />
      </Fragment>
    </Fragment>
  );
};

export default wrapper.withRedux(App);
