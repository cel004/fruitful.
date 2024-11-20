import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

//pages
import Homescreen from './pages/Homescreen/Homescreen.jsx';
import Transactions from './pages/Transactions/Transactions.jsx';
import Personal from './pages/Personal/Personal.jsx';
import Budget from './pages/Budget/Budget.jsx';
import Titlescreen from './pages/TitleScreen/TitleScreen.jsx';

//components
import Login from './components/LoginForm/Login/Login.jsx';
import Registration from './components/LoginForm/Registration/Registration.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Titlescreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/homescreen" element={<Homescreen />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/personal" element={<Personal />} />
      </Routes>
    </Router>
  );
}

export default App;
