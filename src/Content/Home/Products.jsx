import React from 'react'
import { AiOutlineHeart } from "react-icons/ai"
import './products.scss'

export default function Products(props) {
    const productDatas = props.productDatas;

    const rowClickHandler = (e, params) => {
        props.ProductListCallback(params);
    }

    return (
        <div className='products__area'>
            <div className='products__area-header'>
                <div className='products__area-btn-fast__market'>현물 마켓</div>
                <div className='products__area-btn-late__market'>선물 마켓</div>
                <div>24시간 거래대금</div>
            </div>
            <div className='products__area-content'>
                <div className='products__area-content__header-wrapper'>
                    <ul className='products__area-content__header'>
                        <li className='name'>상품명</li>
                        <li className='price'>가격</li>
                        <li className='percent'>등락률</li>
                        <li className='trade-amount'>거래대금</li>
                    </ul>
                </div>
                <div className='products__area-content__list__wrapper'>
                    <ul className='products__area-content__list'>
                        {productDatas.datas.map((data, index) => (
                            <li className='row-unit' key={index} onClick={(e) => { rowClickHandler(e, data) }}>
                                <div className='col-bookmark'>
                                    <AiOutlineHeart />
                                </div>
                                <div className='col-1'>
                                    {data.name}
                                </div>
                                <div className='col-2'>
                                    {data.max_price}
                                </div>
                                <div className='col-3'>
                                    {data.max_price}
                                </div>
                                <div className='col-4'>
                                    {data.max_price}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
