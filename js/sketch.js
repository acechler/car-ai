let car;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  angleMode(DEGREES);
  car = new Car(100, 100, 25, 60); // Initialize car
}

function draw() {


  background(100); // Clear the canvas
  fill(255, 0, 0);
  car.draw(); // Draw the car

}

