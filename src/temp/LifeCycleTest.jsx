import React, { Component } from 'react';
import styles from './main.module.css';
import Button from 'react-bootstrap/Button';

const Promblematic = () => {
    throw (new Error('버그가 나타났다!'));
    return (
      <div>
        
      </div>
    );
  };

class LifeCycleTest extends Component {
    state = {
        number: 0,
        error: false
    }

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentWillMount() {
        console.log('componentWillMount (deprecated)');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 5 의 배수라면 리렌더링 하지 않음
        console.log('shouldComponentUpdate');
        if (nextState.number % 5 === 0) return false;
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }


    handleIncrease = () => {
        const { number } = this.state;
        this.setState({
            number: number + 1
        });
    }

    handleDecrease = () => {
        this.setState(
            ({ number }) => ({
                number: number - 1
            })
        );
    }

  componentDidCatch(error, info) {
    this.setState({
      error: true
    });
  }

    render() {
         if (this.state.error) return (<h1>에러발생!</h1>);

        console.log('render');
        return (
            <div className={styles.layout}>
                <h1>카운터</h1>
                <div>값: {this.state.number}</div>
                { this.state.number === 4 && <Promblematic /> }  
                <Button onClick={this.handleIncrease}>+</Button>
                <Button onClick={this.handleDecrease}>-</Button>
            </div>
        );
    }
}

export default LifeCycleTest;
