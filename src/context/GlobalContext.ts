import React, { Dispatch } from 'react';

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
  SET_LOGGED_IN_TRUE: 'SET_LOGGED_IN_TRUE',
  SET_LOGGED_IN_FALSE: 'SET_LOGGED_IN_FALSE',
  IS_ADMIN_TRUE: 'IS_ADMIN_TRUE',
  IS_ADMIN_FALSE: 'IS_ADMIN_FALSE',
};

interface State {
  loggedIn: boolean,
  isAdmin: boolean,
}

export const initialState = {
  loggedIn: false,
  isAdmin: false,
};

export const reducer = (state: State, action: { type: keyof typeof ACTIONS }) => {
  console.log(action, 'WTF YOUTUBE');
  switch (action.type) {

    // AUTHENTICATION
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

export const GlobalContext = React.createContext<{ state: State, dispatch: Dispatch<any> }>({ state: initialState, dispatch: () => {} });