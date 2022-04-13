import axios from "axios";
import { useEffect, useState } from "react";
import { ChartCandle } from "../component/chart/ChartCandle";
import { ChartVolume } from "../component/chart/ChartVolume";
import { CandleTrade, CandleVolume } from "../types/charts/CandleType";

type Props = {
  width: number | undefined;
  height: number | undefined;
};

export const ChartContainer: React.FC<Props> = ({ width, height }) => {
  // const { data, isLoading, error } = useGetCryptosHistoryQuery("1");
  const [name, setName] = useState("BTC");
  const [defaultLimit, setdefaultLimit] = useState(1000);
  const [dataLength, setDataLength] = useState(900);
  const [candleData, setCandleData] = useState<CandleTrade>({
    date: [],
    open: [],
    close: [],
    high: [],
    low: [],
    closetime: [],
    assetvolume: [],
    basevolume: [],
    quotevolume: [],

  });
  const [volumeData, setVolumeData] = useState<CandleVolume>({
    time:[],
    volume_base:[],
    volume_quote:[],
    volume_total:[],
  });
  const dataDefaultMinusLength = 18;
  useEffect(() => {
    async function getCoinCandle() {
      try {
        const response = await axios.get(
          'https://api.binance.com/api/v3/klines?symbol=BTCEUR&interval=1d&limit=500'
        );
        let trade: CandleTrade = {
          date: [],
          open: [],
          close: [],
          high: [],
          low: [],
          closetime: [],
          assetvolume: [],
          basevolume: [],
          quotevolume: [],
        };

        for (var i = 0; i < response.data.length; ++i) {
          trade.date.push(response.data[i][0]);
          trade.open.push(response.data[i][1]);
          trade.close.push(response.data[i][2]);
          trade.high.push(response.data[i][3]);
          trade.low.push(response.data[i][4]);
          trade.closetime.push(response.data[i][5]);
          trade.assetvolume.push(response.data[i][6]);
          trade.basevolume.push(response.data[i][7]);
          trade.quotevolume.push(response.data[i][8]);
        }

        setCandleData(trade);

      } catch (e) {
        console.log(e)
      }

    };
    async function getCoinVolume() {
      try {
        const response = await axios.get(
          'https://min-api.cryptocompare.com/data/symbol/histoday?fsym=BTC&tsym=EUR&limit=500'
        );
        let volume: CandleVolume = {
          time:[],
          volume_base:[],
          volume_quote:[],
          volume_total:[],
        };

        for (var i = 0; i < response.data.Data.length; ++i) {
          volume.time.push(response.data.Data[i].time);
          volume.volume_base.push(response.data.Data[i].top_tier_volume_quote);
          volume.volume_quote.push(response.data.Data[i].top_tier_volume_base);
          volume.volume_total.push(response.data.Data[i].top_tier_volume_total);
        }

        setVolumeData(volume);

      } catch (e) {
        console.log(e)
      }

    };
    getCoinCandle();
    getCoinVolume();
  }, []);

  const dataWheelHandler = () => {
    window.onwheel = function (e) {
      e.deltaY > 0
        ? setDataLength(dataLength < 18 ? dataLength + 0 : dataLength - 8)
        : setDataLength(
          dataLength > defaultLimit ? dataLength + 0 : dataLength + 8
        );
    };
  };
  const onClickListener = () => {
    setName("ETH");
  };
  const loadDataHandler = () => {
    setdefaultLimit(defaultLimit + 500);
  };
  // 추후 1000개 이상의 데이터를 필요로 할 경우 데이터 끌고오기 (아래)
  // setDataLength(
  //   dataLength >= defaultLimit ? defaultLimit + 500 : defaultLimit + 0
  // );
  // dataLength >

  //** */ 데이터 배열 순서 : time, high, low, open, volumeFrom volumeTo, close
  return (
    <div onWheel={dataWheelHandler}>
      <ChartCandle
        width={width}
        height={height}
        defaultLimit={defaultLimit}
        dataLength={dataLength}
        name={name}
        candleTrade={candleData}
      />
      <ChartVolume
        width={width}
        height={height}
        defaultLimit={defaultLimit}
        dataLength={dataLength}
        name={name}
        candleVolume={volumeData}
      />
    </div>
  );
};