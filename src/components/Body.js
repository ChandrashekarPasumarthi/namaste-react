import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";

//not using keys( not acceptable) <<<< index as key <<<< unique id (best practice)
const Body = () => {
  return (
    <div className="body">
      <div className="search"> Search</div>
      <div className="res-container">
       {
        resList.map( (restaurent) => (
          <RestaurentCard key={restaurent.data.id} resData = {restaurent} />
        ))
       }
      </div>
    </div>
  );
};

export default Body;