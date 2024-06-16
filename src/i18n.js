import { createI18n } from 'vue-i18n'
import EN from './locale/en.json'
import UZ from './locale/uz.json'

function loadLocalMessages() {
   const locale = [{EN: EN} , {UZ: UZ}]
   const messages = {}
   locale.forEach(lang => {
      const key = Object.keys(lang)
      messages[key] = lang[key]
   })
   return messages
}


export default createI18n({
   locale: 'EN',
   fallbackLocale: 'EN',
   messages: loadLocalMessages()
})