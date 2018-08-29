require('dotenv').config();
import express from 'express';
import GraphHTTP from 'express-graphql';
import Schema from './schema';

const app = express();

app.use('/graphql', GraphHTTP({
  schema: Schema,
  pretty: true,
  graphiql: true
}));


var server = app.listen(process.env.PORT || 3001);

module.exports = server;