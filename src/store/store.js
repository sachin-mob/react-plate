import { createStore } from 'redux'
import appReducer from '../reducers/reducers'

export const store = createStore(appReducer)