import React, { Component, useState } from 'react';

function MapTest2 (){    
    const [seasons, setSeasons] = useState({        
        season: ["봄", "여름", "가을", "겨울"],
        name: ""
    })

    const mapTestChange = (e) => {
        setSeasons({
            season: e.target.value,
            name: ""
        })
    }
    const mapTestClick = (e) => {
        setSeasons({
            season : e.target.value.concat(e.target.name),
            name: ""
        })
    }
    const seasonList = seasons.season.map(
        (season, i) => (
            <li key={i}>{season}</li>
        )
    );   
    
    return (
        <div>
            <input type="text"
                name="name"
                placeholder="계절을 입력해주세요."
                value={seasons.name}
                onChange={mapTestChange}
            />
            <button onClick={mapTestClick}>추가</button>
            <ul>
                {seasonList}
            </ul>
        </div>
    )

    // render() {
    //     const { seasons, name } = this.state;
    //     const { mapTestChange, mapTestClick } = this;
    //     const seasonList = seasons.map(
    //         (season, i) => (
    //             <li key={i}>{season}</li>
    //         )
    //     );   
    // }
}

export default MapTest2;