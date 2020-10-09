let header = d3.select('#header')
console.log(header)
console.log(header.node())

let paragraphs = d3.selectAll('p')
console.log(paragraphs)
console.log(paragraphs.nodes())

const change01 = () => header.html('<h2>changed lol<h2/>')

