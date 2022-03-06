import { combineReducers } from 'redux';
import { directoryReducers } from './DirectoryReducers';

const rootReducer = combineReducers({
    directoryReducers
});
 
export default rootReducer;