import React, { Component } from 'react';

export default class FormTest extends Component {
    state = {
        id: '',
        name: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSumbit = e => {
        e.preventDefault();
        this.props.onCreate({
            id: this.state.id,
            name: this.state.name
        });
        this.setState({
            id: "",
            name: ""
        });
    };


    render() {
        return (
            <form onSubmit={this.handleSumbit}>
                <input placeholder="아이디"
                    value={this.state.id}
                    onChange={this.handleChange}
                    name="id"
                />
                <input placeholder="이름"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                />
                <button type="submit">submit</button>
            </form>
        )
    }
}