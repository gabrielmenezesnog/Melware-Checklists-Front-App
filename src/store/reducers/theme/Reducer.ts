import {Reducer} from '@reduxjs/toolkit';

// ActionTypes
import {themeActionTypes} from './ActionTypes';

const initialState = {
  theme: 'white',
};

export const ThemeReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case themeActionTypes.SET_THEME:
      return Object.assign({}, state, {
        theme: action.payload.theme,
      });

    default:
      return state;
  }
};
export default ThemeReducer;
