// select the svg conatiner first
const svg = d3.select('svg');

d3.json('planets.json').then(data => {

  // join the data to circs
  const circs = svg.selectAll('circle')
    .data(data);

  // add attrs to circs already in the DOM
  circs.attr('cy', 200)
    .attr('cx', d => d.distance)
    .attr('r', d => d.radius)
    .attr('fill', d => d.fill);

  // append the enter selection to the DOM
  circs.enter()
    .append('circle')
      .attr('cy', 200)
      .attr('cx', d => d.distance)
      .attr('r', d => d.radius)
      .attr('fill', d => d.fill);

});

