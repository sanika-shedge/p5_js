let brushColor;
let brushSize;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    brushColor = color(0);
    brushSize = 15;
}

function mouseDragged() {
  if (mouseIsPressed) {
    // Change color based on mouse position
    brushColor = color(map(mouseX, 0, width, 0, 255), map(mouseY, 0, height, 0, 255), 150);

    // Draw the brush stroke
    fill(brushColor);
    noStroke();
    ellipse(mouseX, mouseY, brushSize, brushSize);
  }
}

