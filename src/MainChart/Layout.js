import React from 'react';
import ChartComponent from './ChartComponent';
import TradingList from './TradingList';
import styles from './main.css';

function Layout() {
  return (
    <div>
        <ChartComponent className={styles.container}/>
        <TradingList  className={styles.case1}/>
    </div>
  );
}

export default Layout;