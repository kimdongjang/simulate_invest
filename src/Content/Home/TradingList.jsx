import { removeTypeDuplicates } from '@babel/types';
import Counter from '../../temp/Counter';
import React, {useContext, useEffect} from 'react';
import Price from './Price'

import './tradinglist.scss'

export default function TradingList(props) {
    const tradingDatas = props.tradingDatas;
    const selectPrice = props.selectPrice

    console.log(selectPrice);

    const rowClickHandler = (e, params) => {
        props.TradingListCallback(params);
    }

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
                        {tradingDatas.datas.map((data, index) => (
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
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
