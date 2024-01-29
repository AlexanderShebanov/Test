import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://app.wyndy.com/public/graphql',
  cache: new InMemoryCache(),
});
