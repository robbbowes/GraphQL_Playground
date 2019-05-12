const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const config = require('./config/dev');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

mongoose.connect(config.DB_URI, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('Connected to DB');
})

app.use('/graphql', graphqlHTTP({
  // schema: schema //ES5
  schema,
  graphiql: true //ES6
}));

const PORT = 4000;

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT)
});