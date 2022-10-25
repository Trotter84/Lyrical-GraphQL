import React from 'react';
import ReactDOM from 'react-dom';
import { 
  InMemoryCache,
  ApolloClient,
  ApolloProvider
} from '@apollo/client';
import GetSongs from './components/SongList';


const client = new ApolloClient({
  cache: new InMemoryCache()
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <GetSongs />
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
