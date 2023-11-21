import {combineReducers} from 'redux';
import languageReducer from './reducers/language/Reducer';
import themeReducer from './reducers/theme/Reducer';
import userReducer from './reducers/auth/Reducer';

const rootReducer = combineReducers({
  languageReducer,
  themeReducer,
  userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
