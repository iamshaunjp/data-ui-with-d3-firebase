const data = [
  { name: 'news', parent: '' },
  { name: 'tech', parent: 'news' },
  { name: 'sport', parent: 'news' },
  { name: 'music', parent: 'news' },
  { name: 'ai', parent: 'tech', amount: 7 },
  { name: 'coding', parent: 'tech', amount: 5 },
  { name: 'tablets', parent: 'tech', amount: 4 },
  { name: 'laptops', parent: 'tech', amount: 6 },
  { name: 'd3', parent: 'tech', amount: 3 },
  { name: 'gaming', parent: 'tech', amount: 3 },
  { name: 'football', parent: 'sport', amount: 6 },
  { name: 'hockey', parent: 'sport', amount: 3 },
  { name: 'baseball', parent: 'sport', amount: 5 },
  { name: 'tennis', parent: 'sport', amount: 6 },
  { name: 'f1', parent: 'sport', amount: 1 },
  { name: 'house', parent: 'music', amount: 3 },
  { name: 'rock', parent: 'music', amount: 2 },
  { name: 'punk', parent: 'music', amount: 5 },
  { name: 'jazz', parent: 'music', amount: 2 },
  { name: 'pop', parent: 'music', amount: 3 },
  { name: 'classical', parent: 'music', amount: 5 },
];

const stratify = d3.stratify()
  .id(d => d.name)
  .parentId(d => d.parent);

console.log(stratify(data));