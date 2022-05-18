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

export type MyCandleVolume = {
  time: string[];
  volume_from: number[];
  volume_to: number[];
}
export type MyCandleTrade = {
  time: string[];
  high: number[];
  low: number[];
  open: number[];
  close: number[];
}

  
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