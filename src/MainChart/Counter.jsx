import React, { Component } from 'react';
import styles from './main.module.css';
import Button from 'react-bootstrap/Button';

export default class Counter extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <div className={styles.layout}>
          {this.props.counter.value}
          <Button onClick={() => this.props.onIncrement(this.props.counter)}>Increment</Button>
          <Button onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</Button>
        </div>
      </React.Fragment>
    );
  }
}