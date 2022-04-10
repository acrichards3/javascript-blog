import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navbar/Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="col-lg-4 logo">
        <h1 className="navLink">Hello</h1>
      </div>
      <div className="col-lg-4 navLink">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/courses"> Courses </Link>
      </div>
      <div className="col-lg-4">
        <Link to='/'>Login</Link>
      </div>
    </div>
  );
}
