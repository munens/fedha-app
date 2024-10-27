import { ILineChartProps } from './types.ts';

const LineChart = (props: ILineChartProps) => {
  // Specify the chart’s dimensions.
  const width = 928;
  const height = 600;
  const marginTop = 20;
  const marginRight = 20;
  const marginBottom = 30;
  const marginLeft = 30;

  // Create the positional scales.
  const x = d3
    .scaleUtc()
    .domain(d3.extent(unemployment, (d) => d.date))
    .range([marginLeft, width - marginRight]);

  const y = d3
    .scaleLinear()
    .domain([0, d3.max(unemployment, (d) => d.unemployment)])
    .nice()
    .range([height - marginBottom, marginTop]);

  // Create the SVG container.
  const svg = d3
    .create('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', [0, 0, width, height])
    .attr(
      'style',
      'max-width: 100%; height: auto; overflow: visible; font: 10px sans-serif;'
    );

  // Add the horizontal axis.
  svg
    .append('g')
    .attr('transform', `translate(0,${height - marginBottom})`)
    .call(
      d3
        .axisBottom(x)
        .ticks(width / 80)
        .tickSizeOuter(0)
    );

  // Add the vertical axis.
  svg
    .append('g')
    .attr('transform', `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y))
    .call((g) => g.select('.domain').remove())
    .call(
      voronoi
        ? () => {}
        : (g) =>
            g
              .selectAll('.tick line')
              .clone()
              .attr('x2', width - marginLeft - marginRight)
              .attr('stroke-opacity', 0.1)
    )
    .call((g) =>
      g
        .append('text')
        .attr('x', -marginLeft)
        .attr('y', 10)
        .attr('fill', 'currentColor')
        .attr('text-anchor', 'start')
        .text('↑ Unemployment (%)')
    );
};

export default LineChart;
