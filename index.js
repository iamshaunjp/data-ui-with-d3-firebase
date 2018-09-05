const canvas = d3.select('.canvas');

// append the SVG container
const svg = canvas.append('svg')
  .attr('width', 600)
  .attr('height', 600);

// append the SVG elements to the SVG container
const rect = svg.append('rect')
  .attr('width', 200)
  .attr('height', 100)
  .attr('fill', 'blue')
  .attr('x', 20)
  .attr('y', 20);

svg.append('circle')
  .attr('r', 50)
  .attr('cx', 300)
  .attr('cy', 70)
  .attr('fill', 'pink');

svg.append('line')
  .attr('x1', 370)
  .attr('x2', 400)
  .attr('y1', 20)
  .attr('y2', 120)
  .attr('stroke', 'red');

svg.append('text')
  .attr('x', 20)
  .attr('y', 200)
  .attr('fill', 'grey')
  .text('hello, ninjas')
  .style('font-family', 'arial')
