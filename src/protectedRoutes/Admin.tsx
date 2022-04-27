import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

export default function Admin() {
  const context = useContext(GlobalContext);

  console.log(context.state.isAdmin, 'admin component');

  if (context.state.isAdmin) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
}
