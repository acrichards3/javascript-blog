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

/**
 * device has a name, brand, and date manufactured
 */

interface Device {
  name: string;
  brand: string;
  date: string;
}

const getSpecialName = (device: Device) => {
  return device.name + "_special";
}

type Foo = "foo" | "bar";
type Bar = "bar" | "baz";
type Merp = Foo & Bar;

type State1 = {
  name: string;
  model: string | number;
  headphones: boolean | object;
  water: string[];
};

type Headphones = Pick<State1, 'name' | 'model' | 'water'>;

type State2 = {
  name: string;
  model: string;
  headphones: object;
  water: number[]
};

type State3 = State1 & State2;

declare const state: State3;

const someFunction = <D extends Device>(device: D) => {
  return {
    device,
    abc: 123
  }
}

const obj = { name: "alex", brand: "sony", date: "some date" };
const example = someFunction(obj);
const result = example.device;



