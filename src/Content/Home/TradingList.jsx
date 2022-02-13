import { removeTypeDuplicates } from '@babel/types';
import Counter from '../../temp/Counter';
import React from 'react';
import Price from './Price'

import './tradinglist.scss'

class TradingList extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        counters: [
            { id: 0, value: 0 },
            { id: 1, value: 1 },
            { id: 2, value: 2 },
            { id: 3, value: 3 },
            { id: 4, value: 4 },
        ],
        priceList: [
            { id: 0, price: 1000, amount:30923,  percent:10 },
            { id: 1, price: 1005, amount:56923,  percent:10 },
            { id: 2, price: 1010, amount:182923, percent:10},
            { id: 3, price: 1015, amount:8923,   percent:10},
            { id: 4, price: 1020, amount:77923,  percent:10},
        ],
    }

    render() {
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
                            {this.state.priceList.map((data, index) => (
                                <li className='row-unit' key={index}>
                                    <div className='col-1'>
                                        {data.price}
                                    </div>
                                    <div className='col-2'>
                                        {data.amount}
                                    </div>
                                    <div className='col-3'>
                                        {data.percent}
                                    </div>
                                </li>
                            ))}   
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}



export default TradingList;