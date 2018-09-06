const data = [
  {width: 200, height: 100, fill: 'purple'},
  {width: 100, height: 60, fill: 'pink'},
  {width: 50, height: 30, fill: 'red'}
];

// select the svg conatiner first
const svg = d3.select('svg');

// join the data to rects
const rects = svg.selectAll('rect')
  .data(data);

// add attrs to rects already in the DOM
rects.attr('width', d => d.width)
  .attr('height', d => d.height)
  .attr('fill', d => d.fill);

// append the enter selection to the DOM
const added = rects.enter()
  .append('rect')
    .attr('width', d => d.width)
    .attr('height', d => d.height)
    .attr('fill', d => d.fill);
