import { combineReducers } from 'redux';
import redLoading from './loading';
import redData from './data';

const reducer = combineReducers({
  redLoading,
  redData,
});

export default reducer;
