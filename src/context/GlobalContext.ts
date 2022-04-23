import React from 'react';

export const ACTIONS = {
  IS_OPEN_TRUE: 'IS_OPEN_TRUE',
  IS_OPEN_FALSE: 'IS_OPEN_FALSE',
  SET_AUTH_TRUE: 'SET_AUTH_TRUE',
  SET_AUTH_FALSE: 'SET_AUTH_FALSE'
};

export const initialState: any = {
  isOpen: false,
  isAuth: false,
};

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    // OPEN LOGIN DIALOG
    case ACTIONS.IS_OPEN_TRUE:
      return { isOpen: (state.isOpen = true) };
    case ACTIONS.IS_OPEN_FALSE:
      return { isOpen: (state.isOpen = false) };

    // GOOGLE AUTHENTICATION
    case ACTIONS.SET_AUTH_TRUE:
      return { isAuth: (state.isAuth = true) };
    case ACTIONS.SET_AUTH_FALSE:
      return { isAuth: (state.isAuth = false) };

    default:
      return state;
  }
};

export const GlobalContext = React.createContext(initialState);
