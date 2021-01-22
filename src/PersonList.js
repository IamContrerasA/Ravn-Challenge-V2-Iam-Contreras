import { useQuery, gql } from '@apollo/client';
import { Link } from "react-router-dom";
import Spinner from './Spinner.js';

const PERSON_LIST = gql`
  query GetPersonList {
    allPeople{
      edges{
        node{
          id
          name
          gender
          homeworld {           
            name
          }
        }
      }
    }
  }
`;

function PersonList() {
  const { loading, error, data } = useQuery(PERSON_LIST);
  if (loading) return <Spinner />
  if (error) return <h2 className="notice-cell">Failed to Load Data</h2>;

  return data.allPeople.edges.map(({ node }) => (
    <div className="person-cell" key={node.id}>
      <Link to = { `/person/${node.id}` }>
        <h2>{node.name} </h2>
        <p>
          {node.gender === 'n/a' ? 'Droid' : 'Human'} from {node.homeworld.name}
          <i className="arrow" title="arrow icon"></i>
        </p>        
      </Link>
    </div>
    
  ));
}

export default PersonList;