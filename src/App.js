
import React from "react";
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route } from 'react-router'
import configureStore from './store/configureStore'

import HomePage from '@/components/home'
import Network from '@/components/network'
import ScrollToTopController from '@/hooks/useScrollToTopController'

const { store, history } = configureStore(window.__INITIAL_STATE__)

const App = () => {
  return (
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
  )
}

export default hot(App)
