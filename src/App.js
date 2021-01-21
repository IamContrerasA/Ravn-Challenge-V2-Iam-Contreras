import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar.js';
import SideBar from './SideBar.js';
import PersonDetail from './PersonDetails.js';

function App() {
  const client = new ApolloClient({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    cache: new InMemoryCache()
  });
    
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <NavBar />        
          <SideBar />
          <Switch>
            <Route path="/person/:id"> 
              <PersonDetail />
            </Route>
          </Switch>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
