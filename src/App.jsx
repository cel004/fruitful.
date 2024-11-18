import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import HomeScreen from './HomeScreen/HomeScreen.jsx';
import Registration from './components/Registration/Registration.jsx';
import Titlescreen from './TitleScreen/TitleScreen.jsx';
import Login from './components/Login/Login.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Titlescreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/homescreen" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
