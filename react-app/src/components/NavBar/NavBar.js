import React from "react"
import "react-router"
import "./NavBar.css"
import { Link } from "react-router-dom"

const NavBar = (props) => {
  return (
    <div className="navBar">
      <ul>
        <li className="navBar-verticalLine">
          <Link to="/home">Home</Link>
        </li>
        <li className="navBar-verticalLine">
          <Link to="/products">Product List</Link>
        </li>
        <li>
          <Link to="/products/new">Product Creation</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
