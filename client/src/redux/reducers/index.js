import { combineReducers } from 'redux';
import redColors from './colors';
import redData from './data';
import redLoading from './loading';
import login from './login';
import redPage from './paginate';

const reducer = combineReducers({
	redLoading,
	redData,
	redPage,
	redColors,
	login,
});

export default reducer;
