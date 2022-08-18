import { SET_PAGE } from '../actions/types';

export default function redPage(state = 1, { type, payload }) {
	switch (type) {
		case SET_PAGE:
			console.log('page', payload);
			return payload;
		default:
			return state;
	}
}
