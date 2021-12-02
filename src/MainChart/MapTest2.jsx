import React, { Component } from 'react';

function MapTest2 (){
    state = {
        seasons: ["봄", "여름", "가을", "겨울"],
        name: ""
    }
    mapTestChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    mapTestClick = (e) => {
        this.setState({
            seasons: this.state.seasons.concat(this.state.name),
            name: ""
        })
    }
    render() {
        const { seasons, name } = this.state;
        const { mapTestChange, mapTestClick } = this;
        const seasonList = seasons.map(
            (season, i) => (
                <li key={i}>{season}</li>
            )
        );       
    
        return (
            <div>
                <input type="text"
                    name="name"
                    placeholder="계절을 입력해주세요."
                    value={name}
                    onChange={mapTestChange}
                />
                <button onClick={mapTestClick}>추가</button>
                <ul>
                    {seasonList}
                </ul>
            </div>
        )
    }
}

export default MapTest2;