import React from "react";
import HomeComponent from "../component/main/HomeComponen";

type Props = {};

export default function main({ }: Props) {
    return (
        <div>
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
        </div>
    )
}
