import React from 'react';
import {Link} from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
    };
    return (
      <nav className='navBar'>
        <ul>
        <Link to="/">
          <button style={mystyle}>Products</button>
        </Link>
        <Link to="/state">
          <button style={mystyle}>State</button>
        </Link>
        <Link to="/category">
          <button style={mystyle}>Category</button>
        </Link>
        <Link to="/CreateItem">
          <button style={mystyle}>Create Item</button>
        </Link>
        <Link to="/deleteItem">
          <button style={mystyle}>Delete Item</button>
        </Link>
        
        </ul>
      </nav>
    );
  }
}

