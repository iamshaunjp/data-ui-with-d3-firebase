const margin = { top: 20, right: 20, bottom: 50, left: 100 };
const graphWidth = 560 - margin.right - margin.left;
const graphHeight = 360 - margin.top - margin.bottom;

const svg = d3.select('.canvas')
  .append('svg')
  .attr('width', graphWidth + margin.left + margin.right)
  .attr('height', graphHeight + margin.top + margin.bottom);

const graph = svg.append('g')
  .attr('width', graphWidth)
  .attr('height', graphHeight)
  .attr('transform', `translate(${margin.left}, ${margin.top})`);

// scales
const x = d3.scaleTime().range([0, graphWidth]);
const y = d3.scaleLinear().range([graphHeight, 0]);

// axes groups
const xAxisGroup = graph.append('g')
  .attr('class', 'x-axis')
  .attr('transform', "translate(0," + graphHeight + ")");

const yAxisGroup = graph.append('g')
  .attr('class', 'y-axis');

// update function
const update = (data) => {

  // set scale domains
  x.domain(d3.extent(data, d => new Date(d.date)));
  y.domain([0, d3.max(data, d =>  d.distance)]);

  console.log(x(new Date(data[0].date)))

  // create axes
  const xAxis = d3.axisBottom(x)
    .ticks(4)
    .tickFormat(d3.timeFormat("%b %d"));
    
  const yAxis = d3.axisLeft(y)
    .ticks(4)
    .tickFormat(d => d + 'km');

  // call axes
  xAxisGroup.call(xAxis);
  yAxisGroup.call(yAxis);

  // rotate axis text
  xAxisGroup.selectAll('text')
    .attr('transform', 'rotate(-40)')
    .attr('text-anchor', 'end');

};

// data and firestore
var data = [];

db.collection('activities').orderBy('date').onSnapshot(res => {

  res.docChanges().forEach(change => {

    const doc = {...change.doc.data(), id: change.doc.id};

    switch (change.type) {
      case 'added':
        data.push(doc);
        break;
      case 'modified':
        const index = data.findIndex(item => item.id == doc.id);
        data[index] = doc;
        break;
      case 'removed':
        data = data.filter(item => item.id !== doc.id);
        break;
      default:
        break;
    }

  });

  update(data);

});