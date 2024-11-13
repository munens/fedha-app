import { ILineChartData, ILineChartProps } from './types.ts';
import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

const lineGraphProps = {
  margin: { top: 20, right: 30, bottom: 50, left: 60 },
  xAxisLabel: 'Date',
  yAxisLabel: 'Value',
  lineColor: '#fff'
};

const LineChart = ({
  data = [[]],
  width,
  height,
  xAxisLabel,
  yAxisLabel,
  margin
}: ILineChartProps) => {
  const svgRef = useRef<SVGElement>();

  useEffect(() => {
    if (!svgRef.current || !data.length) {
      return;
    }

    const svgElement: SVGElement = svgRef.current;

    // Clear existing chart
    d3.select(svgElement).selectAll('*').remove();

    // Set up dimensions
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Create SVG
    const svg = d3
      .select(svgElement)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr(
        'transform',
        `translate(${margin.left},${lineGraphProps.margin.top})`
      );

    data.forEach((lineDataProp) => {
      const { lineData } = lineDataProp;
      const xScale = d3
        .scaleUtc()
        .domain(d3.extent(lineData, (d) => d.x) as [Date, Date])
        .range([0, innerWidth])
        .nice();

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(lineData, (d) => d.y) as number])
        .range([innerHeight, 0])
        .nice();

      // Create line generator
      const line = d3
        .line<ILineChartData>()
        .x((d) => xScale(d.x))
        .y((d) => yScale(d.y))
        .curve(d3.curveCardinalOpen);

      // Add the line path
      svg
        .append('path')
        .datum(lineData)
        .attr('fill', 'none')
        .attr('stroke', lineDataProp.lineColor)
        .attr('stroke-width', 2)
        .attr('d', line);
    });
    // Set up scales

    // Add X axis
    svg
      .append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(
        d3
          .axisBottom(xScale)
          .ticks(width / 80)
          .tickSizeOuter(0)
      )
      .append('text')
      .attr('class', 'text-sm fill-gray-600')
      .attr('x', innerWidth / 2)
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .text(xAxisLabel);

    // Add Y axis
    svg
      .append('g')
      .call(d3.axisLeft(yScale))
      .append('text')
      .attr('class', 'text-sm fill-gray-600')
      .attr('transform', 'rotate(-90)')
      .attr('y', -45)
      .attr('x', -innerHeight / 2)
      .attr('text-anchor', 'middle')
      .text(yAxisLabel);

    // Create line generator
    const line = d3
      .line<ILineChartData>()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y))
      .curve(d3.curveCardinalOpen);

    // Add the line path
    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', lineGraphProps.lineColor)
      .attr('stroke-width', 2)
      .attr('d', line);

    // Add dots
    // svg
    //   .selectAll('.dot')
    //   .data(data)
    //   .enter()
    //   .append('circle')
    //   .attr('class', 'dot')
    //   .attr('cx', (d) => xScale(d.x))
    //   .attr('cy', (d) => yScale(d.y))
    //   .attr('r', 4)
    //   .attr('fill', lineGraphProps.lineColor)
    //   .attr('stroke', 'white')
    //   .attr('stroke-width', 2);
  }, [
    data,
    width,
    height,
    lineGraphProps.margin,
    xAxisLabel,
    yAxisLabel,
    lineGraphProps.lineColor
  ]);

  return (
    <div className="w-full h-full">
      <svg className="w-full h-full" ref={svgRef} />
    </div>
  );
};

export default LineChart;
