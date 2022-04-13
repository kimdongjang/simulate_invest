export type CandleTrade = {
    date: number[];
    open: number[];
    close: number[];
    high: number[];
    low: number[];
    closetime: string[];
    assetvolume: number[];
    basevolume: number[];
    quotevolume: number[];
  };
export type CandleVolume = {
    time: string[];
    volume_quote: number[];
    volume_base: number[];
    volume_total: number[];
  };


  
export type CandleProps = {
    width: number | undefined;
    height: number | undefined;
    defaultLimit: number | undefined;
    dataLength: number | undefined;
    name: string | undefined;
    candleTrade?: CandleTrade | undefined;
    candleVolume?: CandleVolume | undefined;
  
    // clo5: number[];
    // clo20: number[];
    // clo60: number[];
    // bollinger: number[][];
  };