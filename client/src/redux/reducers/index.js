import { combineReducers } from 'redux';
import redLoading from './loading';
import redData from './data';
import redPage from './paginate';
import redColors from './colors';
import login from './login';

const reducer = combineReducers({
	redLoading,
	redData,
	redPage,
	redColors,
	login,
});

export default reducer;
