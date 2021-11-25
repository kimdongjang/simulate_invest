import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import MainPage from './MainChart/MainPage'
import LoginPage from './Login/LoginPage'

function App() {
  return (
    <>
    <Router>
      <Route path='/' exact component={MainPage}/>
      <Route path='/Login' component={LoginPage}/>
    </Router>
    </>
  );
}

export default App;
