interface ILineChartData {
  readonly x: number;
  readonly y: number;
}

export interface ILineChartProps {
  readonly data: ReadonlyArray<ReadonlyArray<ILineChartData>>;
  readonly width: number;
  readonly height: number;
}
