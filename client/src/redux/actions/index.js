import { SET_LOADING, GET_DATA } from "./types";
import axios from 'axios';

export const setLoading = payload => ({ type: SET_LOADING, payload });

export const getData = () => {
	return async dispatch => {
		dispatch(setLoading(true));
		try {
			const response = await axios.get('http://localhost:3000/Products');
			if (response.status === 200)
				dispatch({ type: GET_DATA, payload: response.data });
		} catch {
			dispatch({ type: GET_DATA, payload: null });
		}
		dispatch(setLoading(false));
	};
};