import { ILineChartData, ILineChartProps } from './types.ts';
import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

const LineChart = ({
  data = [],
  width,
  height,
  xAxisLabel,
  yAxisLabel,
  margin,
  xAxisTicksCount,
  yAxisTicksCount,
  min,
  max
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
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const xScale = d3
      .scaleUtc()
      .domain([min.x, max.x])
      .range([0, innerWidth])
      .nice();

    const yScale = d3
      .scaleLinear()
      .domain([min.y, max.y])
      .range([innerHeight, 0])
      .nice();

    // Set up scales
    // Add X axis
    svg
      .append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(
        d3
          .axisBottom(xScale)
          .ticks(xAxisTicksCount ?? width / 80)
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
      .call(d3.axisLeft(yScale).ticks(yAxisTicksCount ?? height / 40))
      .append('text')
      .attr('class', 'text-sm fill-gray-600')
      .attr('transform', 'rotate(-90)')
      .attr('y', -45)
      .attr('x', -innerHeight / 2)
      .attr('text-anchor', 'middle')
      .text(yAxisLabel);

    data.forEach((lineDataProp) => {
      const { lineData, lineColor, useDots } = lineDataProp;

      // Create line generator
      const line = d3
        .line<ILineChartData>()
        .x((d) => xScale(d.x))
        .y((d) => yScale(d.y))
        .curve(d3.curveBasisOpen);

      // Add the line path
      svg
        .append('path')
        .datum(lineData)
        .attr('fill', 'none')
        .attr('stroke', lineColor)
        .attr('stroke-width', 2)
        .attr('d', line);

      // Add dots

      if (useDots) {
        svg
          .selectAll('.dot')
          .data(lineData)
          .enter()
          .append('circle')
          .attr('class', 'dot')
          .attr('cx', (d) => xScale(d.x))
          .attr('cy', (d) => yScale(d.y))
          .attr('r', 4)
          .attr('fill', lineColor)
          .attr('stroke', 'white')
          .attr('stroke-width', 2);
      }
    });
  }, [
    data,
    width,
    height,
    xAxisLabel,
    yAxisLabel,
    margin.left,
    margin.right,
    margin.top,
    margin.bottom,
    min.x,
    min.y,
    max.x,
    max.y
  ]);

  return (
    <div className="w-full h-full">
      <svg className="w-full h-full" ref={svgRef} />
    </div>
  );
};

export default LineChart;
