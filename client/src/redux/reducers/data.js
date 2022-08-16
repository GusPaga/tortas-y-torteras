import { GET_DATA } from '../actions/types';

const initialState = [];

const redData = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_DATA:
			return payload;
		default:
			return state;
	}
};

export default redData;
