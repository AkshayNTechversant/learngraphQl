const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const grapgQlSchema = require('./grapgql/schema/index');
const graphQlResolver = require('./grapgql/resolver/index');



const App = express();



App.use(bodyParser.json());

App.use('/graphql', graphqlHTTP({
    schema: grapgQlSchema,
    rootValue: graphQlResolver,
    graphiql: true,
})
);

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD
    }@cluster0.ekhda.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
).then(() => {
    App.listen(3000);
}).catch(err => {
    console.log(err);
})

