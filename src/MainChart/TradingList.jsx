import { removeTypeDuplicates } from '@babel/types';
import Counter from './Counter';
import React from 'react';
import Price from './Price'
import styles from './main.module.css';

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
        ]
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    }

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index].value++;
        this.setState({ counters });
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(counter =>
            counter.id !== counterId);
        this.setState({ counters });
    }

    render() {
        return (
            <div className={styles.layout}>
                <p><button onClick={this.handleReset}>Reset</button></p>
                {this.state.counters.map(counter => (
                    <Price/>
                    // <Counter
                    //     key={counter.id}
                    //     counter={counter} // 배열 값을 props를 통해 통째로 전달
                    //     onIncrement={this.handleIncrement}
                    //     onDelete={this.handleDelete}
                    // />
                ))}
            </div>
        )
    }
}



export default TradingList;