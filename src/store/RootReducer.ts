import {combineReducers} from 'redux';
import userReducer from './reducers/auth/Reducer';
import themeReducer from './reducers/theme/Reducer';

const rootReducer = combineReducers({
  userReducer,
  themeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
