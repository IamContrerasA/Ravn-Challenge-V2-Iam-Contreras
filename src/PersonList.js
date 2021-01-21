import { useQuery, gql } from '@apollo/client';

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.allPeople.edges.map(({ node }) => (
    <div key={node.id}>
      <div className="person-cell">
        
        <h2>{node.name}</h2>
        <p>{node.gender === 'n/a' ? 'Droid' : 'Human'} from {node.homeworld.name}</p>
      </div>
      
    </div>
  ));
}

export default PersonList;