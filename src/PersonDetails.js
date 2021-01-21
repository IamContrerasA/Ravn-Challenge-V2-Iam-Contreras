import { useParams } from "react-router-dom";

const PersonDetail = () => {
  const { id } = useParams()
  return ( 
    <div className="content">Person Detail - { id }</div>
   );
}
 
export default PersonDetail;