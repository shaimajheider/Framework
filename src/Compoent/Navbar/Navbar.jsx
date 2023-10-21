import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Home/Home'
import '../Navbar/Navbar.css'


export default function Navbar() {
  window.onscroll = function () {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector("nav").classList.remove("py-4")
    } else {
        document.querySelector("nav").classList.add("py-4")
    }
}
  return (
    <>
    <nav className="navbar navbar-expand-lg py-4 fixed-top">
    <div className="container">
      <Link className="navbar-brand text-white text-uppercase fw-bolder fs-2" to="home">START FRAMEWORK</Link>
      <button className="navbar-toggler bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item me-3 ">
            <Link className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 rounded-3" to="about">About</Link>
          </li>
          <li className="nav-item me-3 ">
            <Link className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 rounded-3" to="portfolio">Portfolio</Link>
           </li>
           <li className="nav-item me-3 ">
            <Link className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 rounded-3" to="contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav> 
          </>
  )
}
