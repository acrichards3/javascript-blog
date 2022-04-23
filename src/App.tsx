import React, { useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { reducer, initialState, GlobalContext } from './context/GlobalContext';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import './styles/app/App.scss';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <GlobalContext.Provider value={{state, dispatch}}>
        <Router>
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </Router>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;



