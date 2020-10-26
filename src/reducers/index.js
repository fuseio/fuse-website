import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import ui from './ui'
import errors from './errors'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  ui,
  errors
})

export default createRootReducer
