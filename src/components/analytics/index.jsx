import { useEffect } from 'react'
import ReactGA from 'react-ga4'

// fires a GA pageview every time the route changes
const GoogleAnalyticsReporter = ({ location: { pathname, search } }) => {
  useEffect(() => {
    ReactGA.send(`${pathname}${search}`)
  }, [pathname, search])
  return null
}

export default GoogleAnalyticsReporter
