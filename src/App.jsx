import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './Header/Header'
import HomeContainer from './Content/Home/HomeContainer'
import Footer from './Footer/Footer'


function App() {
    const [on, setOn] = useState(false);
    const dispatch = useDispatch();

    return (
        <div className='App'>
            <Header />
            <HomeContainer />
            <Footer />
        </div>
    );
}

export default App;
