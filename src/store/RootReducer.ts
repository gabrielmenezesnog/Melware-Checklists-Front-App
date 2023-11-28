import {combineReducers} from 'redux';
import authReducer from './reducers/auth/Reducer';
import languageReducer from './reducers/language/Reducer';
import themeReducer from './reducers/theme/Reducer';
import taskListReducer from './reducers/taskList/Reducer';

const rootReducer = combineReducers({
  authReducer,
  languageReducer,
  themeReducer,
  taskListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
