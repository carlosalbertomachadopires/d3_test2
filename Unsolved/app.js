// Dataset we will be using to set the height of our rectangles
const booksReadThisYear = [17, 23, 20, 34];

const svgHeight = 600
const svgWidth = 300

const rectY = 5
const rectWidth = 20
const rectPAdding = 5

// Upside Down
let svg =d3.select("#svg-area")
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth)

svg.selectAll("rect")
    .data(booksReadThisYear)
    .enter()
    .append("rect")
    .attr("fill", "#FF00FF")
    .attr("stroke", "#000000")
    .attr("x", (d, i) => rectPAdding + (rectWidth + rectPAdding) * i)
    .attr("y", rectY)
    .attr("height", d => d * 10)
    .attr("width", rectWidth)



// Append an SVG wrapper to the page and set a variable equal to a reference to it
// YOUR CODE HERE

// Vertical Bar Chart
// YOUR CODE HERE

let svgVert =d3.select("#svg-area")
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth)

svgVert.selectAll("rect")
    .data(booksReadThisYear)
    .enter()
    .append("rect")
    .attr("fill", "#FF00FF")
    .attr("stroke", "#000000")
    .attr("x", (d, i) => rectPAdding + (rectWidth + rectPAdding) * i)
    .attr("y", rectY)
    .attr("height", d => d * 10)
    .attr("width", rectWidth)

// BONUS
// Horizontal Bar Chart
// YOUR CODE HERE

// BONUS 2
// Alter your Vertical bar chart code to go from bottom  up.
