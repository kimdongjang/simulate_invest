import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import * as PingpoliCandlestickChart from '../chart/PingpoliCandlestickChart'
import styles from '../styles/Home.module.css'
import { useEffect } from "react";
import dynamic from 'next/dynamic'
import { Size, useWindowSize } from '../functions/usewindowsize'
import { ChartContainer } from '../containers/ChartContainer'
import { useSelector, useDispatch } from 'react-redux';
import { socketStart } from '../redux/actions/SocketAction'


const Home: NextPage = () => {
    let canvas = useRef<any>();
    const dispatch = useDispatch();
    // const [tradeData, setTradeDate] = useState<TradeProps>();
    const size: Size = useWindowSize();
        useEffect(() => {
        // 전체 상품/호가 가져오기 위한 웹소켓 시작
        dispatch(socketStart());
        // redux get api 호출
        //getProductDatas();

    }, []);

    return (
        <div>
            <div className='home'>
                <div className='area__chart'>
                    {/* <canvas ref={canvas}></canvas> */}
                    <ChartContainer width={size.width} height={size.height} />                    
                </div>
                <div className='area__function'>
                    <div className='area__product__list'>
                        {/* <Products productDatas={productDatas} ProductListCallback={ProductListCallback} /> */}
                    </div>
                    <div className='area__trading__list'>
                        {/* <TradingList tradingDatas={tradingDatas} TradingListCallback={TradingListCallback} /> */}


                        <div className='area__trading__option'>
                            <div>현재가격</div>
                            {/* <input value={selectPrice.price} /> */}
                            <div>수량</div>
                            {/* <input value={selectPrice.quantity} /> */}

                        </div>
                        <div className='area__trading__action'>
                            {/* <div className='area__trading__button__purchase' onClick={PurchaseProduct}>매수</div> */}
                            <div className='area__trading__button__purchase'>매도</div>
                        </div>

                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home


// export const getServerSideProps = async () => {
//     const res = await axios.get("https://worldtimeapi.org/api/ip");
  
//     return {
//       props: { dateTime: res.data.datetime },
//     };
//   };
