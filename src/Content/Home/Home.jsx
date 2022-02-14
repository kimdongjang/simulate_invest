import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';
import ChartComponent from './ChartComponent'
import Products from './Products'
import TradingList from './TradingList'
import './home.scss';

export default function Home() {
    const [tradingDatas, setTradingDatas] = useState(null);
    const [productDatas, setProductDatas] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectProduct, setSelectProduct] = useState({
        id: 0,
        name: 100,
        max_price: 10,
    })
    const [selectPrice, setSelectPrice] = useState({
        productId: 0,
        price: 100,
        quantity: 10,
    })

    const fetchDatas = async () => {
        try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setTradingDatas(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);            
            const response1 = await axios.get(
                '/api/products'
            );
            setProductDatas(response1.data);

            
            const response2 = await axios.get(
                '/api/trades/1?user_id=0'
            );
            setTradingDatas(response2.data);
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    };

    // 해당 컴포넌트가 생성될 때의 이벤트
    useEffect(() => {
        fetchDatas();
    }, []);

    function ProductListCallback(data) {
        console.log(data);
        setSelectProduct(data);
        // selectProduct.price = data.price;
    }
    function TradingListCallback(data) {
        console.log(data);
        setSelectPrice(data);
        // selectProduct.price = data.price;
    }


    const PurchaseProduct = async() => {
        var isCheck = true;
        var isSucssess = true;
        // 구매 가능한지 체크
        if (!isCheck) {
            return;
        }
        else {
            try {
                // 구매 API 호출
                const response = await axios.post(
                    '/api/trades/test?user_id=0',{

                    }
                );
                isSucssess = response.data;                
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        }
    }


    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!tradingDatas) return null;
    // console.log(tradingDatas);

    return (
        <div className='home'>
            <div className='area__chart'>
                <ChartComponent />
            </div>
            <div className='area__function'>
                <div className='area__product__list'>
                    <Products productDatas={productDatas} ProductListCallback={ProductListCallback} />
                </div>
                <div className='area__trading__list'>
                    <TradingList tradingDatas={tradingDatas} TradingListCallback={TradingListCallback} />


                    <div className='area__trading__option'>
                        <div>현재가격</div>
                        <input value={selectPrice.price} />
                        <div>수량</div>
                        <input value={selectPrice.quantity} />

                    </div>
                    <div className='area__trading__action'>
                        <div className='area__trading__button__purchase' onClick={PurchaseProduct}>매수</div>
                        <div className='area__trading__button__purchase'>매도</div>
                    </div>
                </div>
            </div>



        </div>
    )
}
