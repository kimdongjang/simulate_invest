import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from 'react-dom';
import Chart from './MainChart/Chart';
import TradingList from './MainChart/TradingList';

import { getData } from "./utils"

import { TypeChooser } from "react-stockcharts/lib/helper";


class ChartComponent extends React.Component {
	componentDidMount() {
		getData().then(data => {
			this.setState({ data })
		})
	}
	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
		return (
			<TypeChooser>
				{type => <Chart type={type} data={this.state.data} />}				
			</TypeChooser>			
		)
	}
}

render(
	<ChartComponent />, document.getElementById("root"),
	<TradingList />
);
