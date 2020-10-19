import React, { useState, useContext } from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';
import configureStore from './store/configureStore';
import { LangContext, LangProvider } from './components/shared/lang_provider';
import { IntlProvider } from 'react-intl';

import HomePage from '@/components/home';
import Network from '@/components/network';
import ScrollToTopController from '@/hooks/useScrollToTopController';

const { store, history } = configureStore(window.__INITIAL_STATE__);

import en from '../lang/en.json';
import zh from '../lang/zh.json';

const MESSAGES = {
  en,
  zh,
};

const App = () => {
  return (
    <LangProvider>
      <LangContext.Consumer>
        {(lang) =>
          <IntlProvider messages={MESSAGES[lang]} locale={lang} defaultLocale='en'>
            <Provider store={store}>
              <ConnectedRouter history={history}>
                <ScrollToTopController>
                  <Switch>
                    <Route exact path='/network'>
                      <Network />
                    </Route>
                    <Route path='/'>
                      <HomePage />
                    </Route>
                  </Switch>
                </ScrollToTopController>
              </ConnectedRouter>
            </Provider>
          </IntlProvider>}
      </LangContext.Consumer>
    </LangProvider>
  );
};

export default hot(module)(App);
