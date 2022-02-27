import React, { Component } from 'react'
import { connect } from "react-redux";
import { socketStart } from '../../../redux/actions/SocketAction';


import HomeComponent from '../component/HomeComponent';
import Products from '../component/Products';


class HomeContainer extends Component {
    state = {
        ListenData:
            [
                {
                    "datas": [
                        {
                            trade_order_id: 1,
                            user_id: 1,
                            product_id: 1,
                            point: 100,
                            reg_amount: 10,
                            cur_amount: 0,
                            code_id: 4,
                            type_id: 1,
                            fee: 0,
                            reg_date: "2022-02-26T13:27:54",
                            update_date: "2022-02-26T13:27:54",
                            user_name: "admin",
                            product_name: "삼선중공업",
                            type_name: "BUY",
                            trade_amount: 10,
                            price: 100,
                            asset_item_code_id: 4
                        },
                    ]
                }
            ]
    }


    constructor(props) {
        super(props);
        this.state = { ListenData: {} };
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
    render() {
        console.log(this.state.ListenData)
        // console.log(this.state.ListenData[0].datas[0].product_name)
        return (
            <div>
                <Products/>
                <HomeComponent />

            </div>
        )
        // <div>{this.state.ListenData[0].map(data => (
        // <ul>{data.test}

        // </ul>))}</div>
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

