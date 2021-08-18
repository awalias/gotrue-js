const { version } = require('./package.json');
export const GOTRUE_URL = 'http://localhost:9999'
export const AUDIENCE = ''
export const DEFAULT_HEADERS = { 'x-client-info' : `gotrue-js/${version}` }
export const EXPIRY_MARGIN = 60 * 1000
export const STORAGE_KEY = 'supabase.auth.token'
export const COOKIE_OPTIONS = {
  name: 'sb:token',
  lifetime: 60 * 60 * 8,
  domain: '',
  path: '/',
  sameSite: 'lax',
}
