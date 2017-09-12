import { combineReducers } from 'redux';

import user from './userReducer';
import macro from './macroReducer';

export default combineReducers({
    user,
    macro,
});
