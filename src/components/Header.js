import { useState } from "react";
import {LOGO_URL} from "../utils/constants";

const Header = () => {
  const [btnName, setLoginButton] = useState("LogIn");
  console.log(btnName);
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
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
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