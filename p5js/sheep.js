background(255, 255, 255);
stroke(1);
push();
strokeWeight(30);
line(0, 100, 600, 250);
pop();

let sheepX = 200;
let sheepY = 200;
let sheepS = 1;

function sheep() {
  fill(255, 255, 255);

  //HEAD
  push();
  fill(240, 234, 214);
  ellipse(sheepX + 90 * sheepS, sheepY + 183 * sheepS, 40 * sheepS);
  pop();

  //FEET
  push();
  fill(240, 234, 214);
  rect(sheepX + 30 * sheepS, sheepY + 240 * sheepS, 7 * sheepS, 8 * sheepS);
  rect(sheepX + 60 * sheepS, sheepY + 240 * sheepS, 7 * sheepS, 10 * sheepS);
  rect(sheepX + 95 * sheepS, sheepY + 215 * sheepS, 5 * sheepS, 8 * sheepS);
  pop();

  //BODY
  //the fluffy part
  push();
  ellipse(sheepX + 45 * sheepS, sheepY + 180 * sheepS, 20 * sheepS);
  ellipse(sheepX + 33 * sheepS, sheepY + 185 * sheepS, 15 * sheepS);
  ellipse(sheepX + 30 * sheepS, sheepY + 200 * sheepS, 20 * sheepS);
  ellipse(sheepX + 30 * sheepS, sheepY + 215 * sheepS, 20 * sheepS);
  ellipse(sheepX + 30 * sheepS, sheepY + 225 * sheepS, 10 * sheepS);
  ellipse(sheepX + 35 * sheepS, sheepY + 235 * sheepS, 15 * sheepS);
  ellipse(sheepX + 48 * sheepS, sheepY + 238 * sheepS, 20 * sheepS);
  ellipse(sheepX + 65 * sheepS, sheepY + 238 * sheepS, 20 * sheepS);
  ellipse(sheepX + 78 * sheepS, sheepY + 235 * sheepS, 15 * sheepS);
  ellipse(sheepX + 87 * sheepS, sheepY + 225 * sheepS, 20 * sheepS);
  ellipse(sheepX + 94 * sheepS, sheepY + 215 * sheepS, 10 * sheepS);
  ellipse(sheepX + 95 * sheepS, sheepY + 200 * sheepS, 20 * sheepS);
  ellipse(sheepX + 90 * sheepS, sheepY + 185 * sheepS, 15 * sheepS);
  ellipse(sheepX + 75 * sheepS, sheepY + 175 * sheepS, 20 * sheepS);
  ellipse(sheepX + 60 * sheepS, sheepY + 175 * sheepS, 20 * sheepS);
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

  //EAR
  ellipse(
    sheepX + 93 * sheepS,
    sheepY + 185 * sheepS,
    15 * sheepS,
    30 * sheepS
  );
}

sheep();
