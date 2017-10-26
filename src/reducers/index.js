import { combineReducers } from 'redux';
import user from './user_reducer';
import field from './field_reducer';

export default combineReducers({
    user,
    field,
});
