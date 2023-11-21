import {languageActionTypes} from './ActionTypes';

export const LanguageActions = {
  setLanguage: (payload: any) => ({
    type: languageActionTypes.SET_LANGUAGE,
    payload,
  }),
};
