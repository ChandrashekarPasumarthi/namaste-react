import { useState } from "react";
import {LOGO_URL} from "../utils/constants";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setLoginButton] = useState("LogIn");
  console.log(btnName);

  //If no depedency array => useEffect is called on every render
  //If dependency arry is empty = [] => useEffect is called on initial render(just once) 
  // If dependency array is [btnName] => called everytime [btnName] is udpated.
  useEffect( () =>{ console.log("Header render") }, [btnName]);
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src= {LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>Cart</li>
          <button className="login" onClick={ ()=>{
           btnName === "LogIn" 
           ? setLoginButton("Logout") 
           : setLoginButton("LogIn")
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;