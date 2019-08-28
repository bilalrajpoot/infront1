import React from "react";
import {Link} from 'react-router-dom';
import Digital from "../Pages/DigitalMarketing/Digital";

const Nav = () => {
  return <div id="nav">
    <div id="img">
      <img src="../images/infront-logo.png" alt=""/>

    </div>
    <div id="navbar">
      <ul id="nav-ul">
        <li> 
        <Link to="digital-marketing-sem" >DIGITAL MARKETING</Link>|
        </li>
        <li>WEBSITES  |</li>
        <li>ABOUT  |</li>
        <li>WORK  |</li>
        <li>BLOG  |</li>
        <li>CONTACT  |</li>
      </ul>



    </div>


  </div>;
};

export default Nav;
