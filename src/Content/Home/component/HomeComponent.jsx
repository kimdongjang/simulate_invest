import React, { useState, useEffect, createContext, useCallback, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import ChartComponent from './ChartComponent'
import Products from './Products'
import TradingList from './TradingList'
import './homeComponent.scss';

import getUsersPromise from '../../../redux/actions/GetAction';
import { socketStart } from '../../../redux/actions/SocketAction';
import MyChart from '../chart/MyChart';


export default function HomeComponent() {
    // useSelector Hook으로 스토어에 등록된 상태 조회
    /**
     * 리듀서 테스트
     */
    const productDatas = useSelector((state) => state.ListenData);
    const dispatch = useDispatch();
    const getProductDatas = useCallback(() => {
        dispatch(getUsersPromise()); // redux-promise 방법
    }, [dispatch]);
    // const products = useSelector(state => state.users);


    const [tradingDatas, setTradingDatas] = useState(null);
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



    // 해당 컴포넌트가 생성될 때의 이벤트
    useEffect(() => {
        dispatch(socketStart());

        // redux get api 호출
        getProductDatas();
        

        fetchDatas();
    }, []);
    
    const fetchDatas = async () => {
        try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setTradingDatas(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);

            // 호가창 가져오기
            // const response2 = await axios.get(
            //     '/api/trades/1?user_id=0'
            // );
            // setTradingDatas(response2.data);
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    };

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


    const PurchaseProduct = async () => {
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
                    '/api/trades/test', {
                    product_id: 0,
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
    // if (error) return <div>에러가 발생했습니다</div>;
    // if (!productDatas) return null;
    // console.log(tradingDatas);

    return (
        <div className='home'>
            <div className='area__chart'>
                {/* <MyChart  date={date}
                            open={open}
                            close={close}
                            high={high}
                            low={low}
                            volume={volume}
                            /> */}
            </div>
            <div className='area__function'>
                <div className='area__product__list'>
                    <Products productDatas={productDatas} ProductListCallback={ProductListCallback} />
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
                        <div className='area__trading__button__purchase' onClick={PurchaseProduct}>매수</div>
                        <div className='area__trading__button__purchase'>매도</div>
                    </div>

                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}
