import { createI18n } from 'vue-i18n'
import zhHant from './zhHant'
import en from './en'

const i18n = createI18n({
  // something vue-i18n options here ...
  locale: 'zhHant',
  fallbackLocale: 'zhHant',
  legacy: false,
  messages: {
    zhHant,
    en,
  },
})

export default i18n
