import {I18n} from 'i18n-js';
const ptbr = require('./pt-br.json');
const enus = require('./en-us.json');

const i18n = new I18n({
  'pt-BR': {
    ...ptbr,
  },

  'en-US': {
    ...enus,
  },
});

i18n.defaultLocale = 'pt-BR';
i18n.locale = 'pt-BR';
export default i18n;
