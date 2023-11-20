import {themeActionTypes} from './ActionTypes';

export const ThemeActions = {
  setTheme: (payload: any) => ({
    type: themeActionTypes.SET_THEME,
    payload,
  }),
};
