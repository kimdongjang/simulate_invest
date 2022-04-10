import axios from "axios";
import { useEffect, useState } from "react";
import { CandleTrade, ChartCandle } from "../component/chart/ChartCandle";
import { ChartVolume } from "../component/chart/ChartVolume";

type Props = {
  width: number | undefined;
  height: number | undefined;
};

export const ChartContainer: React.FC<Props> = ({ width, height }) => {
  // const { data, isLoading, error } = useGetCryptosHistoryQuery("1");
  const [name, setName] = useState("BTC");
  const [defaultLimit, setdefaultLimit] = useState(1000);
  const [dataLength, setDataLength] = useState(900);
  const [candleData, setChartCandle] = useState<CandleTrade>({
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
  const dataDefaultMinusLength = 18;
  useEffect(() => {
    async function getCoinCandle() {
      // try ~ catch를 이용해 예외 처리를 하세요.
      try {
        const response = await axios.get(
          'https://api.binance.com/api/v3/klines?symbol=BTCEUR&interval=1d&limit=500'
        );
        let tempList: CandleTrade = {
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
          tempList.date.push(response.data[i][0]);
          tempList.open.push(response.data[i][1]);
          tempList.close.push(response.data[i][2]);
          tempList.high.push(response.data[i][3]);
          tempList.low.push(response.data[i][4]);
          tempList.closetime.push(response.data[i][5]);
          tempList.assetvolume.push(response.data[i][6]);
          tempList.basevolume.push(response.data[i][7]);
          tempList.quotevolume.push(response.data[i][8]);
        }

        setChartCandle(tempList);

      } catch (e) {
        console.log(e)
      }

    };
    getCoinCandle();
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
        candleData={candleData}
      />
      <ChartVolume
        width={width}
        height={height}
        defaultLimit={defaultLimit}
        dataLength={dataLength}
        name={name}
        candleData={candleData}
      />
    </div>
  );
};