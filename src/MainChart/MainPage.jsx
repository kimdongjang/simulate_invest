import React from 'react'

import ChartComponent from './ChartComponent';
import TradingList from './TradingList';
import Info from './HookTest';
import HookTest2 from './HookTest2';
import LifeCycleTest from './LifeCycleTest';
import MapTest from './MapTest'

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
      </div>
    </div>
  );
}

export default MainPage;