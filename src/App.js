import React from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route } from 'react-router'
import configureStore from './store/configureStore'
import { LangContext, LangProvider } from './components/shared/lang_provider'
import { IntlProvider } from 'react-intl'
import GoogleAnalyticsReporter from '@/components/analytics'

import Navbar from '@/components/navbar'
import HomePage from '@/components/home'
import Network from '@/components/network'
import Ecosystem from '@/components/ecosystem';
import Token from '@/components/token'
import About from '@/components/about'
import Footer from '@/components/footer'
import ScrollToTopController from '@/hooks/useScrollToTopController'

import en from '../lang/en.json'
import zh from '../lang/zh.json'
import ru from '../lang/ru.json'
// import vi from '../lang/vi.json'
import ko from '../lang/ko.json'
import es from '../lang/es.json'

const { store, history } = configureStore(window.__INITIAL_STATE__)

const MESSAGES = {
  en,
  zh,
  ru,
  // vi,
  ko,
  es
}

const App = () => {
  return (
    <LangProvider>
      <LangContext.Consumer>
        {(lang) => (
          <IntlProvider
            messages={MESSAGES[lang]}
            locale={lang}
            defaultLocale='en'
          >
            <Provider store={store}>
              <ConnectedRouter history={history}>
                <ScrollToTopController>
                  <Route component={GoogleAnalyticsReporter} />
                  <Navbar />
                  <Switch>
                    <Route exact path='/about'>
                      <About />
                    </Route>
                    <Route exact path='/token'>
                      <Token />
                    </Route>
                    <Route exact path='/network'>
                      <Network />
                    </Route>
                    <Route exact path='/ecosystem'>
                      <Ecosystem />
                    </Route>
                    <Route path='/'>
                      <HomePage />
                    </Route>
                  </Switch>
                  <Footer />
                </ScrollToTopController>
              </ConnectedRouter>
            </Provider>
          </IntlProvider>
        )}
      </LangContext.Consumer>
    </LangProvider>
  )
}

export default hot(module)(App)
