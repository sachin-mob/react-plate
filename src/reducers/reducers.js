import { combineReducers } from 'redux'
import firstReducer from './firstReducer';
import secondReducer from './secondReducer';

const appReducer = combineReducers({
    firstReducer,
    secondReducer
  })

export default appReducer;
