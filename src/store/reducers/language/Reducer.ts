import {Reducer} from '@reduxjs/toolkit';

// ActionTypes
import {languageActionTypes} from './ActionTypes';

const initialState = {
  language: 'pt-BR',
};

export const LanguageReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case languageActionTypes.SET_LANGUAGE:
      return Object.assign({}, state, {
        language: action.payload.language,
      });

    default:
      return state;
  }
};
export default LanguageReducer;
