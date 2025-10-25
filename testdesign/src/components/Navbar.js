import React from "react";
import "./navbar.css";




function Navbar(){
    return(

<div className="nav-bar">
    <div className="nav-logo">
       <img src="./media/images/5e88b52117aa40baa6a96e43b5c4e57858edaa47.png" alt="logo.png" className="nav-image"></img> 
      <div className="logo-text">FloraVision</div> 
     </div>
     <div className="nav-link">
      <ul >
        <li><a href="#">Home</a></li>
        <li className="nav-link-image"><a href="#">Plant Type</a><i className=" fa-solid fa-caret-down"></i></li>
        <li><a href="#">More</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
      </div>
      <div className="right-section">
       <a ><img className="serachImage" src="./media/images/serach.png" alt="serach "></img></a> 
       <a ><img  className="cartImage" src="./media/images/cart.png" alt="arrow "></img></a> 
       <a ><img className="shorttext" src="./media/images/shorttext.svg" alt="lines "></img></a> 
      </div>
     </div>
    )
   
}

export default Navbar;