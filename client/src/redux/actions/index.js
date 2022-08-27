import axios from 'axios';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../firebase/firebase-config';

import {
	GET_COLORS,
	GET_DATA,
	GET_FILTERED_DATA,
	SET_LOGIN,
	LOGIN,
	LOGOUT,
	SET_LOADING,
	SET_PAGE,
	GET_USER,
	GET_USERS,
} from './types';

export const setLoading = payload => ({ type: SET_LOADING, payload });

export const setPage = page => dispatch =>
	dispatch({ type: SET_PAGE, payload: page });

export const loggin = () => dispatch => dispatch({ type: SET_LOGIN });

// Get Products from backend
export const getData = () => {
	return async dispatch => {
		dispatch(setLoading(true));
		try {
			const response = await axios.get('/products');
			if (response.status === 200)
				dispatch({ type: GET_DATA, payload: response.data });
		} catch {
			dispatch({ type: GET_DATA, payload: null });
		}
		dispatch(setLoading(false));
	};
};

// Get filtered Products from backend
export const getFilteredData = query => {
	return async dispatch => {
		try {
			dispatch(setLoading(true));
			const response = await axios.get(`/products/${query}`);
			dispatch({ type: GET_FILTERED_DATA, payload: response.data });
			setPage(1);
		} catch (error) {
			alert('No data found');
			getData();
		}
		dispatch(setLoading(false));
	};
};

// Get Colors from backend
export const getColors = () => {
	return async dispatch => {
		dispatch(setLoading(true));
		const response = await axios.get('/colors');
		dispatch({ type: GET_COLORS, payload: response.data });
		dispatch(setLoading(false));
	};
};

// AUTH
export const login = (uid, displayName) => ({
	type: LOGIN,
	payload: { uid, displayName },
});
export const signIn = (uid, displayName) => {
	return async dispatch => {};
};

export const logout = () => ({ type: LOGOUT });

export const signInGoogle = () => {
	return async dispatch => {
		try {
			const res = await signInWithPopup(auth, googleProvider);
			console.log(res);
			dispatch(login(res.user.uid, res.user.displayName));
		} catch (err) {
			console.log(err);
		}
	};
};

export const signOut = () => {
	return async dispatch => {
		await auth.signOut();
		dispatch(logout());
	};
};

// USERS
export const getUsers = () => {
	return async dispatch => {
		const json = await axios.get('http://localhost:3001/users');
		return dispatch({
			type: GET_USERS,
			payload: json.data,
		});
	};
};

// USER_ID
export const getUser = id => {
	return async dispatch => {
		const json = await axios.get(`http://localhost:3001/users/${id}`);
		return dispatch({
			type: GET_USER,
			payload: json.data,
		});
	};
};
