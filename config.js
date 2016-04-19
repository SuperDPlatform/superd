module.exports = {
  httpServer: {
    port: process.env.HTTP_SERVER_PORT || 80
  },

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
