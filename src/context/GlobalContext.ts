import React from 'react';

export const ACTIONS = {
  IS_OPEN_TRUE: 'IS_OPEN_TRUE',
  IS_OPEN_FALSE: 'IS_OPEN_FALSE',
};

export const initialState: any = {
  isOpen: false,
};

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTIONS.IS_OPEN_TRUE:
      return { isOpen: (state.isOpen = true) };
    case ACTIONS.IS_OPEN_FALSE:
      return { isOpen: (state.isOpen = false) };
    default:
      return state;
  }
};

export const GlobalContext = React.createContext(initialState);
