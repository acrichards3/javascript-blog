import React, { useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { reducer, initialState, GlobalContext } from './context/GlobalContext';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Admin from './protectedRoutes/Admin';
import ComingSoon from './pages/ComingSoon';
import Page404 from './pages/Page404';
import './styles/app/App.scss';
//import LoggedIn from './protectedRoutes/LoggedIn';

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
            <Route path="/courses" element={<ComingSoon />} />
            <Route path="*" element={<Page404 />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route element={<Admin />}></Route>
          </Routes>
        </Router>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
