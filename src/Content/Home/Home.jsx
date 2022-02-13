import React from 'react'
import ChartComponent from './ChartComponent'
import TradingList from './TradingList'
import './home.scss';
import Button from 'react-bootstrap/Button';

export default function Home() {
  return (
    <div className='home'>
        <div className='area__chart'>
            <ChartComponent />
        </div>
        <div className='area__trading__list'>
            <TradingList/>
            <Button variant='success'>거래확인</Button>
        </div>

        
        
    </div>
  )
}
