let squares = []; // Array to hold square objects
let dim; // p5.Vector for dimension

function setup() {
  createCanvas(720, 400);
  noStroke();
  dim = createVector(80, 60); // Create a vector for dimension (width x height)
  // Initialize squares with different speeds, dimensions, and fill colors
  squares = [
    { x: 0, speed: 1, color: [255, 0, 0] }, // Red square
    { x: 0, speed: 2, color: [0, 255, 0] }, // Green square
    { x: 0, speed: 3, color: [0, 0, 255] }  // Blue square
  ];
}

function draw() {
  background(102);
  squares.forEach(square => {
    // Update the x position based on the speed
    square.x += square.speed;
    // Reset position if off canvas
    if (square.x > width + dim.x) {
      square.x = -dim.x;
    }
    // Draw the square
    drawSquare(square.x, height / 2 - dim.y / 2, dim, square.color);
  });
}

// Draws a square with the given parameters
function drawSquare(x, y, dim, fillColor) {
  push(); // Save the current drawing settings
  translate(x, y);
  fill(fillColor);
  rect(-dim.x / 2, -dim.y / 2, dim.x, dim.y);
  pop(); // Restore the previous drawing settings
}
