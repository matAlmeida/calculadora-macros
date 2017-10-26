import {
	GET_FIELD_VALUE,
} from '../actions/types';
import {
	ID_FIELD_GRAMS_PER_KG_FAT,
	ID_FIELD_GRAMS_PER_KG_PROTEIN,
	ID_FIELD_CALORIC_DEFICT,
	ID_FIELD_EXERCISE_TIME,
	ID_FIELD_NAME,
	ID_SELECT_SEX,
	ID_SELECT_CALC,
	ID_FIELD_AGE,
	ID_FIELD_WEIGHT,
	ID_FIELD_HEIGHT,
} from '../constants';

const INITIAL_STATE = {
	[ID_FIELD_GRAMS_PER_KG_FAT]: 0,
	[ID_FIELD_GRAMS_PER_KG_PROTEIN]: 0,
	[ID_FIELD_CALORIC_DEFICT]: 0,
	[ID_FIELD_EXERCISE_TIME]: 0,
	[ID_FIELD_NAME]: '',
	[ID_SELECT_SEX]: true,
	[ID_SELECT_CALC]: 'man',
	[ID_FIELD_AGE]: 0,
	[ID_FIELD_WEIGHT]: 0,
	[ID_FIELD_HEIGHT]: 0,
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
