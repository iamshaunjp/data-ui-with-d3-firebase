const data = [
  {width: 200, height: 100, fill: 'purple'}
];

// select the svg container first
const svg = d3.select('svg');

svg.select('rect')
  .data(data)
  .attr('width', function(d,i,n){ return d.width })
  .attr('height', function(d,i,n){ return d.height })
  .attr('fill', function(d,i,n){ return d.fill });


