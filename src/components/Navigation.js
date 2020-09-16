import React from "react";
import { Link } from "react-router-dom";
import "../components/Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/board">Board</Link>
      <Link to="/search">Search</Link>
    </div>
  );
}

export default Navigation;