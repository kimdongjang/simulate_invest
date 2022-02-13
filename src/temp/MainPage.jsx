import React from 'react'

import ChartComponent from '../Content/Home/ChartComponent';
import TradingList from '../Content/Home/TradingList';
import Info from './HookTest';
import HookTest2 from './HookTest2';
import LifeCycleTest from './LifeCycleTest';
import MapTest from './MapTest'
import MapTest2 from './MapTest2'

import styles from './main.module.css';


function MainPage() {
  return (
    <div className={styles.main_screen}>
      <div className={styles.chart_container}>
        <ChartComponent />
      </div>
      <div className={styles.list_container}>
        <>
          <TradingList />
        </>
        <>
          <Info />
        </>
        <>
          <HookTest2 />
        </>
        <>
          <LifeCycleTest />
        </>
        <>
          <MapTest/>
        </>
        <>
          <MapTest2/>
        </>
      </div>
    </div>
  );
}

export default MainPage;