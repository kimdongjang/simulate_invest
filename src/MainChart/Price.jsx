import React, { Component, useEffect, useState } from 'react';

export default function Price(props) {
    const [curPrice, setCurPrice] = useState(0);
    useEffect(() => {
        setCurPrice(props.value);
    });

    return (
        <>
            <div>{curPrice}</div>
        </>
    );
}