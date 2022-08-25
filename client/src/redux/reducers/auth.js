import { LOGIN, LOGOUT } from '../actions/types';

const initialState = {
	uid: null,
	displayName: null,
};

const authFirebase = (state = initialState, { type, payload }) => {
	switch (type) {
		case LOGIN:
			return { uid: payload.uid, displayName: payload.displayName };
		case LOGOUT:
			return initialState;
		default:
			return state;
	}
};

export default authFirebase;
