import React, { Component } from "react";
import { Link } from "react-router-dom";

import './Header.css'



class Header extends Component {



  render() {
    return (
    <div className="header">
        <Link to = "/">Filmaria</Link>
    </div>
  );
  }
  
}

export default Header;
