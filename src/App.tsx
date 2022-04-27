import React, { useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { reducer, initialState, GlobalContext } from './context/GlobalContext';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Account from './pages/Account';
import Admin from './protectedRoutes/Admin';
import LoggedIn from './protectedRoutes/LoggedIn';
import './styles/app/App.scss';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <GlobalContext.Provider value={{ state, dispatch }}>
        <Router>
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<LoggedIn />}>
              <Route path="/account" element={<Account />} />
            </Route>
            <Route element={<Admin />}>
              <Route path="/create-post" element={<CreatePost />} />
            </Route>
          </Routes>
        </Router>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
