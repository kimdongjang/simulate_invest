import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as action from './redux/actions/SocketAction'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import HomeContainer from './Content/Home/container/HomeContainer';
import Login from './Content/Login/Login';



function App() {
    return (
        <div className='App'>
            <Header />
            <HomeContainer />
            <Footer />
            <Login/>
        </div>
    );
}

export default App;
