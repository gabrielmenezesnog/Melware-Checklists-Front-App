import {combineReducers} from 'redux';
import languageReducer from './reducers/language/Reducer';
import themeReducer from './reducers/theme/Reducer';
import authReducer from './reducers/auth/Reducer';

const rootReducer = combineReducers({
  languageReducer,
  themeReducer,
  authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
