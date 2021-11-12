import React, { Component } from 'react';

export default class Counter extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <div>
          {this.props.counter.value}
          <button onClick={() => this.props.onIncrement(this.props.counter)}>Increment</button>
          <button onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
        </div>
      </React.Fragment>
    );
  }
}