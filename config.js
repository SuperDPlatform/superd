var path = require('path');

module.exports = {
  httpServer: {
    port: process.env.HTTP_SERVER_PORT || 80
  },

  database: {
    adapter: process.env.DATABASE_ADAPTER || 'nedb',

    nedb: {
      path: process.env.DATABASE_NEDB_PATH || path.join(__dirname)
    }
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
