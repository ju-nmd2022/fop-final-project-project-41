let tractorX = 200;
let tractorY = 200;
let tractorS = 1;

background(255, 255, 255);

//making the tractor
function tractor() {
  //TIRES
  //dark grey
  fill(50, 50, 50);
  strokeWeight(3);
  ellipse(
    tractorX + 190 * tractorS,
    tractorY + 100 * tractorS,
    70 * tractorS,
    80 * tractorS
  );
  //medium grey
  fill(150, 150, 150);
  strokeWeight(2);
  ellipse(
    tractorX + 200 * tractorS,
    tractorY + 100 * tractorS,
    60 * tractorS,
    80 * tractorS
  );
  //light grey
  fill(200, 200, 200);
  strokeWeight(1);
  ellipse(
    tractorX + 200 * tractorS,
    tractorY + 100 * tractorS,
    15 * tractorS,
    20 * tractorS
  );
  //part above tire
  fill(255, 0, 0);
  strokeWeight(2);
  beginShape();
  vertex(tractorX + 165 * tractorS, tractorY + 95 * tractorS);
  bezierVertex(
    tractorX + 165 * tractorS,
    tractorY + 90 * tractorS,
    tractorX + 170 * tractorS,
    tractorY + 60 * tractorS,
    tractorX + 205 * tractorS,
    tractorY + 60 * tractorS
  );
  bezierVertex(
    tractorX + 210 * tractorS,
    tractorY + 58 * tractorS,
    tractorX + 210 * tractorS,
    tractorY + 56 * tractorS,
    tractorX + 207 * tractorS,
    tractorY + 55 * tractorS
  );
  bezierVertex(
    tractorX + 168 * tractorS,
    tractorY + 50 * tractorS,
    tractorX + 150 * tractorS,
    tractorY + 70 * tractorS,
    tractorX + 150 * tractorS,
    tractorY + 95 * tractorS
  );
  endShape(CLOSE);
}

tractor();
