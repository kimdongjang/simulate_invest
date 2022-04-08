import axios from "axios";
import produce from 'immer';

type TradeProps = {
  date: number[];
  open: number[];
  close: number[];
  high: number[];
  low: number[];
};

// https://velog.io/@devgosunman/%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%A5%BC-%EB%8B%A4%EB%A3%A8%EB%8A%94-%EA%B8%B0%EC%88%A0-14%EC%9E%A5-%EC%99%B8%EB%B6%80-API%EB%A5%BC-%EC%97%B0%EB%8F%99%ED%95%98%EC%97%AC-%EB%89%B4%EC%8A%A4-%EB%B7%B0%EC%96%B4-%EB%A7%8C%EB%93%A4%EA%B8%B0
export async function runApi () {
  const tempList: TradeProps = {
    date: [],
    open: [],
    close: [],
    high: [],
    low: [],
  };
  try {
    let result = await getCoinCandle(tempList);
    console.log(result)
  } catch (e) {
    console.log(e);
  }
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

function getCoinCandle(tempList:TradeProps){
  const promise = new Promise((resolve, reject) => {
    // resolve는 성공, reject는 실패
    
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

      resolve(tempList);
      
  })
  return promise;
}

export default getCoinCandle;
