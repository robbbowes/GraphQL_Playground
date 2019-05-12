const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
  // schema: schema //ES5
  schema,
  graphiql: true //ES6
}));

const PORT = 4000;

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT)
});