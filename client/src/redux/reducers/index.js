import { combineReducers } from 'redux';
import redLoading from './loading';
import redData from './data';
import redPage from './paginate';

const reducer = combineReducers({
  redLoading,
  redData,
  redPage,
});

export default reducer;
