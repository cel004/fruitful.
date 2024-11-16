import React from 'react';
import Home from './Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import Registration from './components/Registration/Registration.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 



function App() {

  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Registration/Registration.jsx" component = {<Registration/>}/>
      </Routes>
    </Router>
    
  );
}

export default App
