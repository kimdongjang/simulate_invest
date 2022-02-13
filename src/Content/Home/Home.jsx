import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ChartComponent from './ChartComponent'
import TradingList from './TradingList'
import './home.scss';
import Button from 'react-bootstrap/Button';

export default function Home() {
  const [tradingDatas, setTradingDatas] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDatas = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setTradingDatas(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(
        '/api/trades/test?user_id=0'
      );
      setTradingDatas(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  // 해당 컴포넌트가 생성될 때의 이벤트
  useEffect(() => {
    fetchDatas();
  }, []);

  if (loading) return <div>로딩중..</div>; 
  if (error) return <div>에러가 발생했습니다</div>;
  if (!tradingDatas) return null;
  // console.log(tradingDatas);

  return (
    <div className='home'>
        <div className='area__chart'>
            <ChartComponent />
        </div>
        <div className='area__trading__list'>
            <TradingList tradingDatas={tradingDatas}/>


            <div className='area__trading__option'>
              <div>현재가격</div>
              <input />
              <div>수량</div>
              <input />             

            </div>
            <div className='area__trading__action'>              
              <Button className='area__trading__button' variant='success'>매수</Button>
              <Button variant='success'>매도</Button>
            </div>
        </div>

        
        
    </div>
  )
}
