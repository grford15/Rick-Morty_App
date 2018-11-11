import React from "react";
import { Link } from "react-router-dom";
import "./Styling/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li> <Link to ="/">Home</Link> </li>
        <li> <Link to ="/characters">Characters</Link> </li>
        <li> <Link to ="/episodes">Episodes</Link> </li>
        <li> <Link to ="locations">Locations</Link> </li>
      </ul>
    </nav>
);
}
export default Navbar;
