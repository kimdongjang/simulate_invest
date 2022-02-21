import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as action from './redux/actions/SocketAction'

import Header from './Header/Header'
import HomeContainer from './Content/Home/HomeContainer'
import Footer from './Footer/Footer'



function App() {
    const [on, setOn] = useState(false);
    const [param, setParam] = useState("삼선중공업");
    const ws = new WebSocket("wss://ws.channels.honeycombpizza.link/ws/market/1/");

    useEffect(() => {
        // const sockete = new WebSocket("wss://ws.channels.honeycombpizza.link/ws/market/1/");

        // sockete.onopen = () => {
        //     sockete.send("Hello!");
        // };

        // sockete.onmessage = (data) => {
        //     console.log(data);
        // };


        ws.open("open", () => {
            // either with send()
            ws.send("Hello 시발련아");

            console.log(ws);
        });

        return () => {
            // socket.disconnect();
        }
    }, []);

    useEffect(() => {

    }, [])

    return (
        <div className='App'>
            <Header />
            <HomeContainer />
            <Footer />
        </div>
    );
}

export default App;
