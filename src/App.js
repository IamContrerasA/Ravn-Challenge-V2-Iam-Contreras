import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import NavBar from './NavBar.js';
import SideBar from './SideBar.js';

function App() {
  const client = new ApolloClient({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    cache: new InMemoryCache()
  });
    
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <NavBar />        
        <SideBar />
      </div>
    </ApolloProvider>
    
  );
}

export default App;
