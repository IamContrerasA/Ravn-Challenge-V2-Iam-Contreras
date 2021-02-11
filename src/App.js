import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './js/NavBar.js';
import SideBar from './js/SideBar.js';
import PersonDetails from './js/PersonDetails.js';
import { relayStylePagination } from "@apollo/client/utilities";

function App() {
  const client = new ApolloClient({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            allPeople: relayStylePagination(),
          },
        },
      },
    })
  });
    
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <NavBar />        
          <SideBar />
          <Switch>
            <Route path="/person/:id"> 
              <PersonDetails />
            </Route>
          </Switch>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
