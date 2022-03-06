import React, { Component } from "react";
import FormTest from "./FormTest";

export default class LoginPage extends Component {
    index = 0; // id는 렌더링 되는 값이 아니기 때문에 state 값 안에 넣어줄 필요 없음

  state = {
    information: []
  };
  handleCreate = data => {
    const { information } = this.state; // 비구조 할당

    // 불변성 유지. 기존것 기반으로 값 주입. concat
    this.setState({
      information: information.concat({
        ...data,
        index: this.index++

        /* 또는 다른 방법1: 
        name: data.name,
        phone: data.phone,
        id: this.id++

      방법2:
        .concat(Object.assign( {}, data, {
          id: this.id++
        }))
        
      */
      })
      // 비구조할당 안쓰면 this.state.information.concat(data)가 된다.
    });
  };

  render() {
    return (
      <div>
        <FormTest onCreate={this.handleCreate} />
        {JSON.stringify(this.state.information)}
      </div>
    );
  }
}

