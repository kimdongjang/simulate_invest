export {}
// import React, { useState, useEffect, createContext, useCallback, useRef } from 'react'
// import { useSelector, useDispatch } from 'react-redux';
// import axios from 'axios';
// // import ChartComponent from './ChartComponent'
// import Products from './Products'
// import TradingList from './TradingList'
// import './homeComponent.scss';

// import getUsersPromise from '../../redux/actions/GetAction';
// import { socketStart } from '../../redux/actions/SocketAction';
// import MyChart from '../chart/MyChart';
// import { RootState } from '../../redux/reducers/RootReducer';


// export default function HomeComponent() {
//     // useSelector Hook으로 스토어에 등록된 상태 조회
//     /**
//      * 리듀서 테스트
//      */
//     const productDatas: [] = useSelector((store: RootState) => store.SocketReducer.ListenData);
//     const dispatch = useDispatch();
//     const getProductDatas = useCallback(() => {
//         dispatch(getUsersPromise()); // redux-promise 방법
//     }, [dispatch]);
//     // const products = useSelector(state => state.users);


//     const [tradingDatas, setTradingDatas] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [selectProduct, setSelectProduct] = useState({
//         id: 0,
//         name: 100,
//         max_price: 10,
//     })
//     const [selectPrice, setSelectPrice] = useState({
//         productId: 0,
//         price: 100,
//         quantity: 10,
//     })



//     // 해당 컴포넌트가 생성될 때의 이벤트
//     useEffect(() => {
//         // 전체 상품/호가 가져오기 위한 웹소켓 시작
//         dispatch(socketStart());
//         // redux get api 호출
//         //getProductDatas();

//     }, []);

//     /**
//      *  상품 리스트 클릭 콜백
//      * @param {*} data 
//      */
//     function ProductListCallback(data) {
//         console.log(data);
//         setSelectProduct(data);
//         // selectProduct.price = data.price;
//     }
//     function TradingListCallback(data) {
//         console.log(data);
//         setSelectPrice(data);
//         // selectProduct.price = data.price;
//     }


//     /**
//      * 상품 구매 액션
//      */
//     const PurchaseProduct = async () => {
//         dispatch(postPromise('/api/trades/test', 0));
//     }


//     if (loading) return <div>로딩중..</div>;
//     // if (error) return <div>에러가 발생했습니다</div>;
//     // if (!productDatas) return null;
//     // console.log(tradingDatas);

//     return (
//         <div className='home'>
//             <div className='area__chart'>
//                 <MyChart  date={date}
//                             open={open}
//                             close={close}
//                             high={high}
//                             low={low}
//                             volume={volume}
//                             />
//             </div>
//             <div className='area__function'>
//                 <div className='area__product__list'>
//                     {/* <Products productDatas={productDatas} ProductListCallback={ProductListCallback} /> */}
//                 </div>
//                 <div className='area__trading__list'>
//                     {/* <TradingList tradingDatas={tradingDatas} TradingListCallback={TradingListCallback} /> */}


//                     <div className='area__trading__option'>
//                         <div>현재가격</div>
//                         {/* <input value={selectPrice.price} /> */}
//                         <div>수량</div>
//                         {/* <input value={selectPrice.quantity} /> */}

//                     </div>
//                     <div className='area__trading__action'>
//                         <div className='area__trading__button__purchase' onClick={PurchaseProduct}>매수</div>
//                         <div className='area__trading__button__purchase'>매도</div>
//                     </div>

//                     <div>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
