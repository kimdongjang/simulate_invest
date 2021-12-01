import { render } from '@testing-library/react'
import React, { Component } from 'react'

export default function MapTest(){
    const menus = ['menu1','menu2','menu3','menu4']
    const menuList = menus.map((data, index) => (<li key={index}>{data}</li>))

    return(
        <ul>
            {menuList}
        </ul>
    );       
    
}