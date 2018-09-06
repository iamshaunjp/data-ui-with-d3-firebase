// select the svg conatiner first
const svg = d3.select('svg');

d3.json('menu.json').then(data => {

  const y = d3.scaleLinear()
    .domain([0, 1000])
    .range([0, 500]);

  //console.log(y(600))

  // join the data to circs
  const rects = svg.selectAll('rect')
    .data(data);

  // add attrs to circs already in the DOM
  rects.attr('width', 50)
    .attr("height", d => y(d.orders))
    .attr('fill', 'orange')
    .attr('x', (d, i) => i * 70)

  // append the enter selection to the DOM
  rects.enter()
    .append('rect')
      .attr('width', 50)
      .attr("height", d => y(d.orders))
      .attr('fill', 'orange')
      .attr('x', (d, i) => i * 70)

});

