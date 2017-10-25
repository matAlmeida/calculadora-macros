import {
	MY_TYPE,
} from '../actions/types';
import {
	MY_ERROR,
} from '../constants/errors';

const INITIAL_STATE = {
	id: 0,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case MY_TYPE: {
			return {
				...state,
				id: 1,
			};
		}
		default:
			return state;
	}
}