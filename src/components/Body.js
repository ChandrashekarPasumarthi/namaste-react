import RestaurentCard from "./RestaurentCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => { 
	// Local State Variable - Super Powerful variable
	const[listOfRestaurents, setListofRestaurents] = useState([]);

	useEffect( ()=>{
		fetchData() 
	}, []);

	const fetchData = async () => {
		const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

		const json = await data.json();

		console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
		
		//Optional Chaining
		setListofRestaurents(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
	}

	//Conditional Rendering
	if(listOfRestaurents.length === 0 ) {
		return <Shimmer />
	}

  return (
    <div className="body">
      <div className="filter"> 
	  <button 
	  className="filter-btn" 
	  onClick={() => {
		//Filter Logic here
		const filteredList = listOfRestaurents.filter(
			(res) => res.info.avgRating > 4
		);
		setListofRestaurents(filteredList);
		}}>
		Top Rated Restaurents
		</button>
	  </div>
      <div className="res-container">
       {
        listOfRestaurents.map( (restaurent) => (
          <RestaurentCard key={restaurent.info.id} resData = {restaurent} />
        ))
       }
      </div>
    </div>
  );
};

export default Body;