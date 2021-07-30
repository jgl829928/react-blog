// 开发环境
const API_PROXY_PREFIX = '/devApi'
const isProd = process.env.NODE_ENV === 'production'
const baseUrl = isProd ? process.env.VUE_APP_API_BASE_URL : API_PROXY_PREFIX
export default baseUrl;