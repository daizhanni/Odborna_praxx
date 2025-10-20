import { createI18n } from 'vue-i18n'
import sk from './locales/sk.json'
import en from './locales/en.json'
import ua from './locales/ua.json'

const saved = localStorage.getItem('lang') || 'sk'

export const i18n = createI18n({
    legacy: false,
    locale: saved,
    fallbackLocale: 'sk',
    messages: { sk, en, ua }
})
