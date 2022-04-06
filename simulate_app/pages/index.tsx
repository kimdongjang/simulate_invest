import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PingpoliCandlestickChart } from '../chart/PingpoliCandlestickChart'
import Products from '../component/main/Products'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
        <div className='home'>
            <div className='area__chart'>
                <PingpoliCandlestickChart/>
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
