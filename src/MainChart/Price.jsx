import React, { Component, useEffect, useState } from 'react';

export default function Price(props) {   

    return (
        <div>
            <div>{props.id}</div>
            <div>{props.price}</div>
            <div>{props.amount}</div>
        </div>
    );
}