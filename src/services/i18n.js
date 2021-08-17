import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { es, en } from './locales'

const resources = {
  es: { common: es },
  en: { common: en },
}

i18n.use(initReactI18next).init({
  resources,
  whitelist: ['es', 'en'],
  debug: process.env.NODE_ENV === 'development',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
  react: {
    wait: true,
  },
})

export default i18n
