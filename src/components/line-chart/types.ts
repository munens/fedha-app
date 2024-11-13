interface IMarginProps {
  readonly top: number;
  readonly left: number;
  readonly right: number;
  readonly bottom: number;
}

export interface ILineChartData {
  readonly x: Date;
  readonly y: number;
}

interface ILineDataProps {
  lineData: ILineChartData[];
  lineColor: string;
}

export interface ILineChartProps {
  readonly data: ReadonlyArray<ILineDataProps>;
  readonly width: number;
  readonly height: number;
  readonly xAxisLabel: string;
  readonly yAxisLabel: string;
  readonly margin: IMarginProps;
}
