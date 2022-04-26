import React from 'react';

export const ADMINS = [
  {
    admin: true,
    name: 'Alex Richards',
    level: 'OWNER',
    membership: 'UNLIMITED',
    uid: 'WKLoUzKsp0UR7YqwGefXUHabwka2',
  },
];

export const ACTIONS = {
  IS_OPEN_TRUE: 'IS_OPEN_TRUE',
  IS_OPEN_FALSE: 'IS_OPEN_FALSE',
  SET_AUTH_TRUE: 'SET_AUTH_TRUE',
  SET_AUTH_FALSE: 'SET_AUTH_FALSE',
  SET_LOGGED_IN_TRUE: 'SET_LOGGED_IN_TRUE',
  SET_LOGGED_IN_FALSE: 'SET_LOGGED_IN_FALSE',
  IS_ADMIN_TRUE: 'IS_ADMIN_TRUE',
  IS_ADMIN_FALSE: 'IS_ADMIN_FALSE',
};

export const initialState: any = {
  isOpen: false,
  isAuth: false,
  loggedIn: false,
  isAdmin: false,
};

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    // OPEN LOGIN DIALOG
    case ACTIONS.IS_OPEN_TRUE:
      return { ...state, isOpen: true };
    case ACTIONS.IS_OPEN_FALSE:
      return { ...state, isOpen: false };

    // AUTHENTICATION
    case ACTIONS.SET_AUTH_TRUE:
      return { ...state, isAuth: true };
    case ACTIONS.SET_AUTH_FALSE:
      return { ...state, isAuth: false };

    // IS USER LOGGED IN
    case ACTIONS.SET_LOGGED_IN_TRUE:
      return { ...state, loggedIn: true };
    case ACTIONS.SET_LOGGED_IN_FALSE:
      return { ...state, loggedIn: false };

    // IS ADMIN
    case ACTIONS.IS_ADMIN_TRUE:
      return { ...state, isAdmin: true };
    case ACTIONS.IS_ADMIN_FALSE:
      return { ...state, isAdmin: false };

    default:
      return state;
  }
};

export const GlobalContext = React.createContext(initialState);
