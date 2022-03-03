import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as action from './redux/actions/SocketAction'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import HomeContainer from './Content/Home/container/HomeContainer';
import Login from './Content/Login/Login';
import HomeComponent from './Content/Home/component/HomeComponent';



function App() {
    return (
        <div className='App'>
            <Header />
            <HomeComponent />
            <Footer />
            <Login/>
        </div>
    );
}

export default App;
