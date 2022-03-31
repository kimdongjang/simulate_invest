import React, { Component } from 'react'
import { connect } from "react-redux";
import { socketStart } from '../../../redux/actions/SocketAction';
import { PRICELIST_LOGIN } from '../../../redux/actions/PriceListAction';


import HomeComponent from '../component/HomeComponen';
import Products from '../component/Products';
import TradingList from '../component/TradingList'
import axios from 'axios';


class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ListenData: {},
            selectProduct: {
                id: 0,
                name: 100,
                max_price: 10,
            },
            selectPrice:{
                id:0,
                price:0,
                quantity:0
            }
        };
    }
    componentDidMount() {
        console.log('socket')
        this.props.socketStart();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (
            JSON.stringify(nextProps.ListenData) !==
            JSON.stringify(prevState.ListenData)) {
            return {
                ListenData: nextProps.ListenData
            };
        }
        return prevState.ListenData;
    }


    ProductListCallback(data) {
        this.selectProduct = data;
    }
    SelectProuct(product){
        this.props.PRICELIST_LOGIN(product.product_id);
    }

    PurchaseProduct = async () => {
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
                // setError(e);
            }
            // setLoading(false);
        }
    }

    render() {
        console.log(this.state.ListenData)
        return (
            <div className='home'>
                <div className='area__chart'>
                    {/* <MyChart date={date}
                        open={open}
                        close={close}
                        high={high}
                        low={low}
                        volume={volume}
                    /> */}
                </div>
                <div className='area__function'>
                    <div className='area__product__list'>
                        <Products />
                    </div>
                    <div className='area__trading__list'>
                        <TradingList rowClickHandler={(product) => this.setState({ product })} />


                        <div className='area__trading__option'>
                            <div>현재가격</div>
                            <input value={this.state.selectPrice.price} />
                            <div>수량</div>
                            <input value={this.state.selectPrice.quantity} />

                        </div>
                        <div className='area__trading__action'>
                            <div className='area__trading__button__purchase' onClick={this.PurchaseProduct()}>매수</div>
                            <div className='area__trading__button__purchase'>매도</div>
                        </div>

                        <div>

                        </div>
                    </div>
                </div>
            </div>
        )

    }

}

function mapStateToProps(state) {
    console.log("mapStateToProps")
    return {
        ListenData: state.SocketReducer.ListenData,
    };
}


export default connect(mapStateToProps, { socketStart })(
    HomeContainer
);

