import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';
import configureStore from './store/configureStore';
import { IntlProvider } from 'react-intl';

import HomePage from '@/components/home';
import Network from '@/components/network';
import ScrollToTopController from '@/hooks/useScrollToTopController';

const { store, history } = configureStore(window.__INITIAL_STATE__);

import en from '../lang/en.json';
import zh from '../lang/zh.json';
import SelectLanguage from './components/shared/select_language';

const MESSAGES = {
  en,
  zh,
};

const App = () => {
  const [lang, setLang] = useState('en');
  return (
    <IntlProvider messages={MESSAGES[lang]} locale={lang} defaultLocale='en'>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ScrollToTopController>
            <SelectLanguage setLang={setLang} />
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
    </IntlProvider>
  );
};

export default hot(module)(App);
