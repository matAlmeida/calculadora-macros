import {
	GET_FIELD_VALUE,
} from '../actions/types';
import {
	ID_FIELD_GRAMS_PER_KG_FAT,
	ID_FIELD_GRAMS_PER_KG_PROTEIN,
	ID_FIELD_CALORIC_DEFICT,
	ID_FIELD_EXERCISE_TIME,
} from '../constants';

const INITIAL_STATE = {
	[ID_FIELD_GRAMS_PER_KG_FAT]: 0,
	[ID_FIELD_GRAMS_PER_KG_PROTEIN]: 0,
	[ID_FIELD_CALORIC_DEFICT]: 0,
	[ID_FIELD_EXERCISE_TIME]: 0,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_FIELD_VALUE: {
			const { target: { id, value } } = action.payload;
			return {
				...state,
				[id]: value,
			};
		}
		default:
			return state;
	}
}
