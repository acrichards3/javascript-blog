import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@blueprintjs/core'
import '../../styles/navbar/Navbar.css';


export default function Navbar() {
  return (
    <div className="navbar">
      <div className="col-lg-4 navStart">
        <h1 className="logo">Logo Here</h1>
      </div>
      <div className="col-lg-4 navCenter">
        <Link to="/" className='navLink'> Home </Link>
        <Link to="/about" className='navLink'> About </Link>
        <Link to="/courses"className='navLink'> Courses </Link>
      </div>
      <div className="col-lg-4 navEnd">
        <Button intent='primary'>Login</Button>
      </div>
    </div>
  );
}
