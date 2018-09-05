const data = [
  {width: 200, height: 100, fill: 'purple'}
];

d3.select('rect')
  .data(data)
  .attr('width', (d,i,n) => d.width)
  .attr('height', (d,i,n) => d.height)
  .attr('fill', (d,i,n) => d.fill);


