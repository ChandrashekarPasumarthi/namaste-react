import RestaurentCard from "./RestaurentCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => { 
	// Local State Variable - Super Powerful variable
	const[listOfRestaurents, setListofRestaurents] = useState([]);
	const[searchText, setSearchText] = useState("");
	const[filteredRestaurent, setFilteredRestaurent] = useState([]);

	console.log("Body Rendered");
	//Whenever state variable update, react triggers a reconcilation cycle(re-renders the component);
	useEffect( ()=>{
		fetchData() 
	}, []);

	const fetchData = async () => {
		const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

		const json = await data.json();

		console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
		
		//Optional Chaining
		setListofRestaurents(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
		setFilteredRestaurent(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
	}
  return listOfRestaurents.length === 0 ? <Shimmer/> :(
    <div className="body">
      <div className="filter"> 
	  <div className="search">
		<input type="text" className="search-box" value={searchText} onChange={(e) =>{
			setSearchText(e.target.value);
		} }/>
		<button onClick={ ()=>{
			//Filter the restraurent cards and update the UI using state
			//searchText
			console.log(searchText);
			const filteredRestaurent = listOfRestaurents.filter(
				(res) => res.info.name.toLocaleLowerCase().includes(searchText.toLowerCase())
			);
			setFilteredRestaurent(filteredRestaurent);
		}}>Search</button> 
	  </div>
	  <button
	  className="filter-btn" 
	  onClick={() => {
		//Filter Logic here
		const filteredList = listOfRestaurents.filter(
			(res) => res.info.avgRating > 4.5
		);
		setListofRestaurents(filteredList);
		}}>
		Top Rated Restaurents
		</button>
	  </div>
      <div className="res-container">
       {
        filteredRestaurent.map( (restaurent) => (
          <RestaurentCard key={restaurent.info.id} resData = {restaurent} />
        ))
       }
      </div>
    </div>
  );
};

export default Body;