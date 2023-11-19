import {combineReducers} from 'redux';
import userReducer from './reducers/auth/Reducer';

const rootReducer = combineReducers({
  userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
