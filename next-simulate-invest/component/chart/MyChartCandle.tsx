import { MyCandleVolume } from "../../types/charts/CandleType";


export const MyChartCandle = (width:number, height:number, volumeData:MyCandleVolume) => {
    // SVG 차트 크기 지정
    let SVG_CHART_WIDTH = typeof width === "number" ? width * 1 : 0;
    let SVG_CHART_HEIGHT = typeof height === "number" ? height * 0.5 : 0;
    const xForPrice = 75;
    const xAxisLength = SVG_CHART_WIDTH - xForPrice;
    const yAxisLength = SVG_CHART_HEIGHT * 0.94;
    const x0 = 0;
    const y0 = 0;

    // 누산기가 포함된 reduce 함수를 사용해 배열의 총합을 구해서 활용할 때 사용한다.
    // const dataYMax = volumeData.volume_from.reduce((max, from) => Math.max(max, from), 0 )
    // console.log(dataYMax)

    return (
        <div>

        </div>
    );
};