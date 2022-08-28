import { combineReducers } from 'redux';
import authFirebase from './auth';
import redColors from './colors';
import login from './login';
import redData from './data';
import redLoading from './loading';
import redPage from './paginate';
import redUser from './user';

const reducer = combineReducers({
	redLoading,
	redData,
	redPage,
	redColors,
	login,
	authFirebase,
	redUser,
});

export default reducer;
