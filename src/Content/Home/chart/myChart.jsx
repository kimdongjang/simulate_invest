import React from 'react'

const SVG_CHART_WIDTH = 1600;
const SVG_CHART_HEIGHT = 400;
const SVG_VOLUME_WIDTH = 1600;
const SVG_VOLUME_HEIGHT = 400;

export default function myChart() {
    const x0 = 50;
    const xAxisLength = SVG_CHART_WIDTH - x0 * 2;
    const y0 = 50;
    const yAxisLength = SVG_CHART_HEIGHT - y0 * 2;

    const xAxisY = y0 + yAxisLength;

    return (
    <div className="bg-chartGray-default flex-col flex">
        <CandleChart />
        <VolumeChart />
    </div>
    )
}


const CandleChart = () => {
    const x0 = 50;
    const xAxisLength = SVG_CHART_WIDTH - x0 * 2;
    const y0 = 50;
    const yAxisLength = SVG_CHART_HEIGHT - y0 * 2;
  
    const xAxisY = y0 + yAxisLength;
  
    return (
      <div>
        <svg width={SVG_CHART_WIDTH} height={SVG_CHART_HEIGHT}>
          <line x1={x0} y1={xAxisY} x2={x0 + xAxisLength} y2={xAxisY} />
          <text x={x0 + xAxisLength + 5} y={xAxisY + 10}>
            x
          </text>
          <line x1={x0} y1={y0} x2={x0} y2={y0 + yAxisLength} />
        </svg>
      </div>
    );
  };
  
  const VolumeChart = () => {
    const x0 = 50;
    const xAxisLength = SVG_VOLUME_WIDTH - x0 * 2;
    const y0 = 50;
    const yAxisLength = SVG_VOLUME_HEIGHT - y0 * 2;
  
    const xAxisY = y0 + yAxisLength;
  
    return (
      <div>
        <svg width={SVG_VOLUME_WIDTH} height={SVG_VOLUME_HEIGHT}>
          <line x1={x0} y1={xAxisY} x2={x0 + xAxisLength} y2={xAxisY} />
          <text x={x0 + xAxisLength + 5} y={xAxisY + 10}>
            x
          </text>
          <line x1={x0} y1={y0} x2={x0} y2={y0 + yAxisLength} />
        </svg>
      </div>
    );
  };
