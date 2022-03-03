import { removeTypeDuplicates } from '@babel/types';
import React, { useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Price from './Price'

import './tradinglist.scss'

export default function TradingList({ rowClickHandler }) {
    const productDatas = useSelector((state) => state.SocketReducer.ListenData);

    // const rowClickHandler = (e, params) => {
    //     props.TradingListCallback(params);
    // }

    return (
        <div className='tradeorder__area'>
            <div className='tradeorder__area-wrapper order-book-scrollx'>
                <div className='tradeorder__area-header-wrapper'>
                    <ul className='tradeorder__area-header'>
                        <li className='charge-price-unit'>가격</li>
                        <li className='title'>수량</li>
                        <li className='var-percent'>변동율</li>
                    </ul>
                </div>
                <div className='tradeorder__area-content-wrapper'>
                    <ul className='tradeorder__area-content'>
                        {productDatas && productDatas.map(data => (
                            data.datas && data.datas.map(product => (
                                <li className='row-unit' key={product.product_id} onClick={(e) => { rowClickHandler(e, product) }}>
                                    <div className='col-1'>
                                        {product.product_name}
                                    </div>
                                    <div className='col-2'>
                                        {product.point}
                                    </div>
                                    <div className='col-3'>
                                        {product.reg_amount}
                                    </div>
                                    <div className='col-4'>
                                        {product.trade_amount}
                                    </div>
                                </li>
                            ))
                        ))
                        }

                        {/* {productDatas.datas.map((data, index) => (
                            <li className='row-unit' key={index} onClick={(e)=>{rowClickHandler(e, data)}}>
                                <div className='col-1'>
                                    {data.price}
                                </div>
                                <div className='col-2'>
                                    {data.quantity}
                                </div>
                                <div className='col-3'>
                                    {data.type_name}
                                </div>
                            </li>
                        ))} */}
                    </ul>
                </div>
            </div>
        </div>
    )
}
