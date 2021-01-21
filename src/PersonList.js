import { useQuery, gql } from '@apollo/client';

const PERSON_LIST = gql`
  query GetPersonList {
    allPeople{
      edges{
        node{
          id
          name
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
      <p>
        {node.id}: {node.name}
      </p>
    </div>
  ));
}

export default PersonList;