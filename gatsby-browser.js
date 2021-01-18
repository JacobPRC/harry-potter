const React = require("react");
const {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} = require("@apollo/client");
const { setContext } = require("apollo-link-context");
const { createHttpLink } = require("apollo-link-http");
const fetch = require("isomorphic-fetch");

const httpLink = createHttpLink({
  uri: "https://graphql.fauna.com/graphql",
  fetch,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer fnAD_zOsLMACAnGWzv_xB_j9CrP8xes57w8WmNrp`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);
