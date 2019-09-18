// Joining data to an element
const data = [
    {
        width: 200,
        height: 200,
        fill: 'purple',
    },
];

const svg = d3.select('svg');

// *** 'this' REFERS TO THE ELEMENT WE'RE APPLYING PROPERTIES TO
// const rect = svg
//     .select('rect')
//     .data(data)
//     .attr('width', function(d) {
//         console.log(this);
//         return d.width;
//     })
//     .attr('height', function(d) {
//         return d.height;
//     })
//     .attr('fill', function(d) {
//         return d.fill;
//     });

// Using arrow functions
// *** 'this' REFERS TO THE WINDOW OBJECT
// *** 'n[i]' REFERS TO THE ELEMENT WE'RE APPLYING PROPERTIES TO
const rect = svg
    .select('rect')
    .data(data)
    .attr('width', (d, i, n) => {
        //console.log(this);
        console.log(n[i]);
        return d.width;
    })
    .attr('height', d => d.height)
    .attr('fill', d => d.fill);

/*
d data
i index
n the array of elements
*/
