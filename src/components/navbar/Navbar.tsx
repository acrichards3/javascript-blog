import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@blueprintjs/core'
import '../../styles/navbar/Navbar.scss';


export default function Navbar() {
  return (
    <div className="navbar">
      <div className="col-lg-4 navStart">
        <h1 className="logo">Logo Here</h1>
      </div>
      <div className="col-lg-4 navCenter">
        <Link to="/" className="navLink">
          <Icon icon="home" color="#99A5B9" /> Home{' '}
        </Link>
        <Link to="/blog" className="navLink">
          <Icon icon="manually-entered-data" color="#99A5B9" /> Blog{' '}
        </Link>
        <Link to="/courses" className="navLink">
          <Icon icon="learning" color="#99A5B9" /> Courses{' '}
        </Link>
      </div>
      <div className="col-lg-4 navEnd">
        <button className="loginBtn">Sign In</button>
      </div>
    </div>
  );
}
