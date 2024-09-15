let finalX = 0;
let finalY = 0;

function setup() {
  createCanvas(540, 540);
}

function draw() {
  background('#8484ff');
  fill('#f6d7d7');
  stroke('#292d29');
  strokeWeight(2);
  textFont('Helvetica');
  textAlign(CENTER, CENTER);
  textSize(140);
  textStyle(BOLD);

  let defaultX = width / 2 + 10;
  let defaultY = height / 2 + 10;

  if (
    mouseX > 0 &&
    mouseX < width &&
    mouseY > 0 &&
    mouseY < height
  ) {
    finalX = lerp(finalX, mouseX, 0.3);
    finalY = lerp(finalY, mouseY, 0.3);
  } else {
    finalX = lerp(finalX, defaultX, 0.1);
    finalY = lerp(finalY, defaultY, 0.1);
  }

  let myText = 'WOW';
  let copies = 21;
  let startX = width - finalX;
  let startY = height - finalY;

  for (let i = 0; i <= copies; i += 1) {
    let amt = i / copies;
    let x = lerp(startX, finalX, amt);
    let y = lerp(startY, finalY, amt);
    text(myText, x, y);
  }
}