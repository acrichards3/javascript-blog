import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

export default function LoggedIn() {
  const context = useContext(GlobalContext);

  console.log(context.state.loggedIn, 'loggedin component');

  if (context.state.loggedIn) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
}
