import RestaurentCard from "./RestaurentCard";
import { useState } from "react";
import resList from '../utils/mockData'

const Body = () => { 
	// State Variable - Super Powerful variable
	const[listOfRestaurents, setListofRestaurents] = useState(resList);
  return (
    <div className="body">
      <div className="filter"> 
	  <button 
	  className="filter-btn" 
	  onClick={() => {
		//Filter Logic here
		const filteredList = listOfRestaurents.filter(
			(res) => res.data.avgRating > 4
		);
		setListofRestaurents(filteredList);
		}}>
		Top Rated Restaurents
		</button>
	  </div>
      <div className="res-container">
       {
        listOfRestaurents.map( (restaurent) => (
          <RestaurentCard key={restaurent.data.id} resData = {restaurent} />
        ))
       }
      </div>
    </div>
  );
};

export default Body;