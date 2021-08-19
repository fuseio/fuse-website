import React from 'react'
import { isMobile } from 'react-device-detect'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga4'
import App from './App'
import './styles/styles.scss'

if (typeof CONFIG?.reactGA?.trackingId === 'string') {
  ReactGA.initialize(CONFIG?.reactGA?.trackingId, CONFIG.reactGA.gaOptions)
  ReactGA.set({
    customBrowserType: !isMobile ? 'desktop' : 'web3' in window || 'ethereum' in window ? 'mobileWeb3' : 'mobileRegular'
  })
} else {
  ReactGA.initialize('test', { testMode: true, debug: true })
}

window.addEventListener('error', error => {
  ReactGA.exception({
    description: `${error.message} @ ${error.filename}:${error.lineno}:${error.colno}`,
    fatal: true
  })
});

// imports all images so webpack can compile them
((ctx) => {
  const keys = ctx.keys()
  const values = keys.map(ctx)
  return keys.reduce((o, k, i) => {
    const a = { ...o }
    a[k] = values[i]
    return { ...a }
  }, {})
})(require.context('./assets', true, /.*/))

ReactDOM.render(<App />,
  document.getElementById('root'))
