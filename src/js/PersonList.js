import { useQuery, gql } from '@apollo/client';
import Spinner from './Spinner.js';
import Persons from './Persons';

const PERSON_LIST = gql`
  query GetPersonList($cursor: String) {
    allPeople(first: 5, after: $cursor){
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
      pageInfo{
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;

function PersonList() {
  const { loading, error, data, fetchMore } = useQuery(PERSON_LIST);
  if (loading) return <Spinner />
  if (error) return <h2 className="notice-cell">Failed to Load Data</h2>;

  const nodes = data.allPeople.edges.map((edge) => edge.node);
  const pageInfo = data.allPeople.pageInfo;
  
  return (
    <Persons      
      entries={nodes}
      onLoadMore={() => {
        if (pageInfo.hasNextPage) {
          fetchMore({
            variables: {
              cursor: data.allPeople.pageInfo.endCursor,
            },            
          });
        }
      }}
    />
  );
}

export default PersonList;