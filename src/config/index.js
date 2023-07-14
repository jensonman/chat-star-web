const env = process.env.NODE_ENV
const config = {
    'development': 'devUrl',
    'production': 'baseUrl'
}

export default {
    baseURL: config[env]
}