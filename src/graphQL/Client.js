import { ApolloClient, HttpLink, from, InMemoryCache } from "@apollo/client";

const link = from([
  new HttpLink({
    uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  }),
]);

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        edges: {
          // Don't cache separate results based on
          // any of this field's arguments.
          keyArgs: false,

          // Concatenate the incoming list items with
          // the existing list items.
          merge(existing = [], incoming) {
            return [...existing, ...incoming];
          },
        },
      },
    },
  },
});

const Client = new ApolloClient({
  connectToDevTools: true,
  cache,
  // cache: new InMemoryCache(),
  link,
});

export default Client;
