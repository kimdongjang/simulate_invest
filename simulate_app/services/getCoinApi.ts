import axios from "axios";
import produce from 'immer';

type TradeProps = {
  date: number[];
  open: number[];
  close: number[];
  high: number[];
  low: number[];
};


const getCoinCandle = () => {
  const tempList: TradeProps = {
    date: [],
    open: [],
    close: [],
    high: [],
    low: [],
  };
  

  var XMLHttpRequest = require('xhr2');
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open(
    "GET",
    "https://api.binance.com/api/v3/klines?symbol=BTCEUR&interval=1d&limit=200"
  );
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var json = JSON.parse(xmlhttp.responseText);
      for (var i = 0; i < json.length; ++i) {
        tempList.open.push(json[i][1]);
        tempList.close.push(json[i][2]);
        tempList.high.push(json[i][3]);
        tempList.low.push(json[i][4]);
      }
    }
  };
  xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xmlhttp.send();
  
  console.log(tempList.date[0])

  return tempList;

  // axios
  //   .get(
  //     "https://api.binance.com/api/v3/klines?symbol=BTCEUR&interval=1d&limit=200"
  //   )
  //   .then(function (response) {
  //     // response
  //     var json = JSON.parse(response.data);
  //     for (var i = 0; i < json.length; ++i) {
  //       tempData.date.push(json[i][0]);
  //       tempData.open.push(json[i][1]);
  //       tempData.close.push(json[i][2]);
  //       tempData.high.push(json[i][3]);
  //       tempData.low.push(json[i][4]);
  //     }

  //     console.log(tempData);
  //     return tempData;
  //   })
  //   .catch(function (error) {
  //     // 오류발생시 실행
  //   })
  //   .then(function () {
  //     // 항상 실행
  //   });
};

export default getCoinCandle;
