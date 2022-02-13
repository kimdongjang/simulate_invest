import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './Header/Header'
import Home from './Content/Home/Home'
import Footer from './Footer/Footer'

function App() {
  return (
    <div className='App'>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
