background(255, 255, 255);
stroke(1);

let sheepX = 200;
let sheepY = 200;
let sheepS = 1;

function sheep() {
  fill(255, 255, 255);

  //BODY
  //the fluffy part
  push();
  ellipse(245, 380, 20);
  ellipse(233, 385, 15);
  ellipse(230, 400, 20);
  ellipse(230, 415, 20);
  ellipse(230, 425, 10);
  ellipse(235, 435, 15);
  ellipse(248, 438, 20);
  ellipse(265, 438, 20);
  ellipse(278, 435, 15);
  ellipse(287, 425, 20);
  ellipse(294, 415, 10);
  ellipse(295, 400, 20);
  ellipse(290, 385, 15);
  ellipse(275, 375, 20);
  ellipse(260, 375, 20);
  pop();

  //the shape
  push();
  noStroke();
  beginShape();
  vertex(sheepX + 75 * sheepS, sheepY + 170 * sheepS);
  bezierVertex(
    sheepX + 40 * sheepS,
    sheepY + 160 * sheepS,
    sheepX + 5 * sheepS,
    sheepY + 210 * sheepS,
    sheepX + 39 * sheepS,
    sheepY + 240 * sheepS
  );
  bezierVertex(
    sheepX + 90 * sheepS,
    sheepY + 260 * sheepS,
    sheepX + 118 * sheepS,
    sheepY + 190 * sheepS,
    sheepX + 75 * sheepS,
    sheepY + 170 * sheepS
  );
  endShape();
  pop();
}

sheep();
