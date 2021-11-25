import React from 'react';
import ChartComponent from './ChartComponent';
import TradingList from './TradingList';
import Info from './HookTest';
import Example from './HookTest2';
import LifeCycleTest from './LifeCycleTest';
import styles from './main.module.css';

function Layout() {
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
          <Example />
        </>
        <>
          <LifeCycleTest />
        </>
      </div>
    </div>
  );
}

export default Layout;