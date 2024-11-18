import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import HomeScreen from './pages/HomeScreen/HomeScreen.jsx';
import Transactions from './pages/Transactions/Transactions.jsx';
import Budget from './pages/Budget/Budget.jsx';
import Registration from './components/Registration/Registration.jsx';
import Titlescreen from './pages/TitleScreen/TitleScreen.jsx';
import Login from './components/Login/Login.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Titlescreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/homescreen" element={<HomeScreen />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/budget" element={<Budget />} />
      </Routes>
    </Router>
  );
}

export default App;
