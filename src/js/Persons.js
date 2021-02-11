import { Link } from "react-router-dom";

const Persons = (props) => {
  return ( 
    <div> 
      {props.onLoadMore()}   
      {props.entries.map(node =>         
        <div className="person-cell" key={node.id}>
          <Link to = { `/person/${node.id}` }>
            <h2>{node.name} </h2>
            <p>
              {node.gender === 'n/a' ? 'Droid' : 'Human'} from {node.homeworld.name}
              <i className="arrow" title="arrow icon"></i>
            </p>        
          </Link>
        </div>        
      )}
    </div>
   );
}
 
export default Persons;