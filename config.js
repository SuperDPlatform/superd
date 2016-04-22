var path = require('path');

module.exports = {
  httpServer: {
    port: process.env.HTTP_SERVER_PORT || 80
  },

  redis: {
    host: process.env.REDIS_HOST || "localhost",
    port: process.env.REDIS_PORT || 6379
  },

  rest: {
    url: process.env.REST_URL,
    apiKey: process.env.REST_API_KEY || ""
  },

  uuidSalt: process.env.UUID_SALT || "your-super-secret-salt",

  queryParser: {
    arrayLimit: process.env.QUERY_PARSER_ARRAY_LIMIT || 0
  },

  bodyParser: {
    json: {
      limit: process.env.BODY_PARSER_JSON_LIMIT || '100k'
    },

    urlEncoded: {
      limit: process.env.BODY_PARSER_URL_ENCODED_LIMIT || '100k'
    }
  }
}
