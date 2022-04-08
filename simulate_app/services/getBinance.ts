import axios from "axios";

type TradeProps = {
    date: string[],
    open: number[],
    close: number[],
    high: number[],
    low: number[],
    volume: number[],
}

const useBinance = () => {    
    let tempData:TradeProps = {
        date: [],
        open: [],
        close: [],
        high: [],
        low: [],
        volume: [],
    };
    axios.get("https://api.binance.com/api/v3/klines?symbol=BTCEUR&interval=1d&limit=200")
    .then(function (response) {
         // response  
         var json = JSON.parse(response.data);
         for ( var i = 0 ; i < json.length ; ++i )
            {
                tempData.date.push(json[i][0]);
                tempData.open.push(json[i][1]);
                tempData.close.push(json[i][2]);
                tempData.high.push(json[i][3]);
                tempData.low.push(json[i][4]);
                tempData.volume.push(json[i][5]);
            }   
            
        return tempData; 
    }).catch(function (error) {
        // 오류발생시 실행
    }).then(function() {
        // 항상 실행
    });
}

export default useBinance