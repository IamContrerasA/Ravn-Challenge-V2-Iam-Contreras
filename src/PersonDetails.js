import { useQuery, gql } from '@apollo/client';
import { useParams } from "react-router-dom";

const PersonDetails = () => {
  const { id } = useParams()

  const PERSON_DETAILS = gql`
    query GetPersonDetails {
      person(id: "${id}") {
        id
        eyeColor      
        hairColor
        skinColor
        birthYear
        vehicleConnection {
          edges {
            node {   
              id         
              name
            }
          }
        }
      }
    }
  `;
  
  const { loading, error, data } = useQuery(PERSON_DETAILS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="content" key={data.person.id}>
      <div className="section-header">
        <h2>General Information</h2>
        <div className="data-cell">
          <h2 className="field">Eye Color</h2>
          <h2 className="value">{data.person.eyeColor}</h2>
          <hr/>         
        </div>
        <div className="data-cell">
          <h2 className="field">Hair Color</h2>
          <h2 className="value">{data.person.hairColor}</h2>
          <hr/>         
        </div>
        <div className="data-cell">
          <h2 className="field">Skin Color</h2>
          <h2 className="value">{data.person.skinColor}</h2>
          <hr/>         
        </div>
        <div className="data-cell">
          <h2 className="field">Birth Year</h2>
          <h2 className="value">{data.person.birthYear}</h2>
          <hr/>      
        </div>
      </div>

      <div className="section-header">
        <h2>Vehicles</h2>
        {data.person.vehicleConnection.edges.map(({ node }) => (
        <div className="data-cell" key={node.id}>
          <h2 className="field">{node.name}</h2>
          <hr/>
        </div>
        ))}
      </div>
    </div>
    
  );
}
 
export default PersonDetails;