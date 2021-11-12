import React from 'react';
import ChartComponent from './ChartComponent';
import TradingList from './TradingList';
import styles from './main.css';

function Layout() {
  return (
    <div class="main_screen">
        <section class="chart_container">
          <ChartComponent style={styles.container}/>
        </section>
        <aside class="list_container">
          <TradingList style={styles.case1}/>
        </aside>
    </div>
  );
}

export default Layout;