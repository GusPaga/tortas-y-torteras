import { combineReducers } from 'redux';
import authFirebase from './auth';
import redColors from './colors';
import redData from './data';
import redLoading from './loading';
import redPage from './paginate';

const reducer = combineReducers({
	redLoading,
	redData,
	redPage,
	redColors,
	authFirebase,
});

export default reducer;
