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
  readonly lineData: ILineChartData[];
  readonly lineColor: string;
  readonly useDots: boolean;
}

export interface ILineChartProps {
  readonly data: ReadonlyArray<ILineDataProps>;
  readonly width: number;
  readonly height: number;
  readonly xAxisLabel: string;
  readonly yAxisLabel: string;
  readonly margin: IMarginProps;
  readonly xAxisTicksCount?: number;
  readonly yAxisTicksCount?: number;
  readonly min: {
    readonly x: Date;
    readonly y: number;
  };
  readonly max: {
    readonly x: Date;
    readonly y: number;
  };
}
