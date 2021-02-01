// Dataset we will be using to set the height of our rectangles
const booksReadThisYear = [17, 23, 20, 34];

const svgHeight = 600
const svgWidth = 300

const rectY = 5
const rectWidth = 20
const rectPadding = 5

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
    .attr("x", (d, i) => rectPadding + (rectWidth + rectPadding) * i)
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
    .attr("x", (d, i) => rectPadding + (rectWidth + rectPadding) * i)
    .attr("y", d => svgHeight - (d * 10) - rectPadding)
    .attr("height", d => d * 10)
    .attr("width", rectWidth)

// BONUS
// Horizontal Bar Chart
// YOUR CODE HERE

const svgWidthHor = 600
const svgHeightHor = 300

const rectHeightHor = 20
const rectPaddingHor = 5

let svgHor =d3.select("#svg-area")
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth)

svgHor.selectAll("rect")
    .data(booksReadThisYear)
    .enter()
    .append("rect")
    .attr("fill", "#FF00FF")
    .attr("stroke", "#000000")
    .attr("x", rectPaddingHor)
    .attr("y", (d, i) => rectPaddingHor + (rectHeightHor + rectPaddingHor) * i)
    .attr("height", rectHeightHor)
    .attr("width", d => d * 10)


// BONUS 2
// Alter your Vertical bar chart code to go from bottom  up.
