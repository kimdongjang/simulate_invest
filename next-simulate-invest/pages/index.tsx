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


const Home: NextPage = () => {
    let canvas = useRef<any>();
    // const [tradeData, setTradeDate] = useState<TradeProps>();
    const size: Size = useWindowSize();

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
