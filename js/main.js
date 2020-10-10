let header = d3.select('#header')
// console.log(header)
// console.log(header.node())

let paragraphs = d3.selectAll('p')
// console.log(paragraphs)
// console.log(paragraphs.nodes())

const change01 = () => header.html('<h2>changed lol<h2/>')

//working with adding and removing things

const itemList = d3.select('#itemList')

const count = () => itemList.selectAll('li').size()

const addItem = () => itemList.append('li').text(`new item ${count()}`)
const removeAll = () => itemList.selectAll('li').remove()
const removeLast = () => itemList.select('li:last-child').remove()

const textToChange = d3.select('#text')

const changeText = () => textToChange.style('color', 'red')
const swapText = () => {
  const currentColor = d3.select('#text').style('color')
  if (currentColor === 'red') textToChange.style('color', 'blue')
  else textToChange.style('color', 'red')
}

