import React, { useState } from "react";
import "../styles/home/navbar.scss";
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <>
    <nav className="landing-navbar navbar navbar-light navbar-expand-md bg-transparent justify-content-md-center justify-content-start">
      <img className="company-logo-mobile navbar-brand d-md-none d-inline" src={logo} alt="logo"></img>
      <button
        className="navbar-toggler ml-0"
        type="button"
        data-toggle="collapse"
        data-target="#collapsingNavbar2"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse bg-transparent collapse justify-content-between align-items-center w-100" id="collapsingNavbar2">
        <ul className="navbar-nav mx-auto text-md-center text-left">
          <li className="nav-item"> <a href="#"> Home </a></li>
          <li className="nav-item"> <a href="#"> Store </a></li>
          <li className="nav-item"> <a href="#"> Contact </a></li>
          <li className="nav-item"> <a className="company-temp" href="#"> COMPANY</a></li>
          <li className="nav-item"> <a href="#"> About </a></li>
          <li className="nav-item"> <a href="#"> Subscribe </a></li>
          <li className="nav-item"> <a href="#"> Card </a></li>
        </ul>
  
      </div>
    </nav>
    </>
  );
};

export default Navbar;


//   <nav className="landing-top-navbar navbar navbar-light navbar-expand-md justify-content-md-center justify-content-start pb-0">
//     <img className="company-logo-mobile navbar-brand d-md-none d-inline" src={logo} alt="logo"></img>
//     <button
//       className="navbar-toggler ml-0"
//       type="button"
//       data-toggle="collapse"
//       data-target="#collapsingNavbar2"
//     >
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="navbar-collapse bg-transparent collapse justify-content-between align-items-center w-100" id="collapsingNavbar2">
//       <ul className="navbar-nav mx-auto text-md-center text-left">
//         <li> <p className="tagline-nav"> FIND YOUR DREAM WATCH </p></li>
//         <li className="nav-item"> 
//           <form class="form-inline">
//           <input class="search-bar form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//           <button class="now-btn my-2 my-sm-0" type="submit">NOW</button>
//           </form>
//         </li>
//       </ul>
//     </div>
// </nav>