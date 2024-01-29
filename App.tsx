import React from 'react';
import { enableScreens } from 'react-native-screens';
import { ReaderProvider } from '@epubjs-react-native/core';

import { ApolloProvider } from '@apollo/client';
import { client } from './api';
import { InitialScreen } from './screens';

enableScreens();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <InitialScreen />
    </ApolloProvider>
  );
};

export default App;
