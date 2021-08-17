import es from './es.json'
import en from './en.json'
import i18n from '../../../services/i18n'

const resources = {
  es,
  en,
}

for (const resource in resources) {
  i18n.addResourceBundle(resource, 'topNav', resources[resource])
}
