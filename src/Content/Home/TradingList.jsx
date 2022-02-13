import { removeTypeDuplicates } from '@babel/types';
import Counter from '../../temp/Counter';
import React from 'react';
import Price from './Price'

import './tradinglist.scss'

export default function TradingList(props) {
    const tradingDatas = props.tradingDatas;

    console.log(tradingDatas);

    return (
        <div className='trade-order-book'>
            <div className='order-book-wrapper order-book-scrollx'>
                <div className='list-header-wrapper'>
                    <ul className='list-book-header'>
                        <li className='charge-price-unit'>가격</li>
                        <li className='title'>수량</li>
                        <li className='var-percent'>변동율</li>
                    </ul>
                </div>
                <div className='list-content-wrapper'>
                    <ul className='list-ask'>
                        {tradingDatas.datas.map((data, index) => (
                            <li className='row-unit' key={index}>
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
