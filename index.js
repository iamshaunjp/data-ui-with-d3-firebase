const data = [
  {width: 200, height: 100, fill: 'purple'},
  {width: 100, height: 60, fill: 'pink'},
  {width: 50, height: 30, fill: 'red'}
];

// console.log(d3.selectAll('rect').data(data))

d3.selectAll('rect') 
  .data(data)
  .attr('width', (d,i,n) => d.width)
  .attr('height', (d,i,n) => d.height)
  .attr('fill', (d,i,n) => d.fill);


