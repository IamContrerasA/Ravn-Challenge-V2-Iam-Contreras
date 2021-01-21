import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import PersonList from './PersonList.js'

function App() {
  const client = new ApolloClient({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    cache: new InMemoryCache()
  });
    
  return (
    <ApolloProvider client={client}>
      <h1>Person List</h1>
      <PersonList />      
    </ApolloProvider>
    
  );
}

export default App;
