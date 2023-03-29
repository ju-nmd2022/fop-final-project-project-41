let tractorX = 200;
let tractorY = 200;
let tractorS = 1;

background(255, 255, 255);

//making the tractor
function tractor() {
  //PART WHERE YOU SIT
  push();
  fill(255, 0, 0);
  strokeWeight(2);
  beginShape();
  vertex(tractorX + 180 * tractorS, tractorY + 100 * tractorS);
  vertex(tractorX + 170 * tractorS, tractorY + tractorS);
  bezierVertex(
    tractorX + 150 * tractorS,
    tractorY - 30 * tractorS,
    tractorX + 110 * tractorS,
    tractorY - 30 * tractorS,
    tractorX + 85 * tractorS,
    tractorY + tractorS
  );
  vertex(tractorX + 70 * tractorS, tractorY + 70 * tractorS);
  vertex(tractorX + 120 * tractorS, tractorY + 105 * tractorS);
  vertex(tractorX + 170 * tractorS, tractorY + 100 * tractorS);
  endShape();
  beginShape();
  vertex(tractorX + 130 * tractorS, tractorY - 20 * tractorS);
  bezierVertex(
    tractorX + 120 * tractorS,
    tractorY + 20 * tractorS,
    tractorX + 115 * tractorS,
    tractorY + 60 * tractorS,
    tractorX + 120 * tractorS,
    tractorY + 105 * tractorS
  );
  endShape();
  strokeWeight(2);
  stroke(255, 100, 0);
  fill(255, 255, 0);
  beginShape();
  vertex(tractorX + 150 * tractorS, tractorY - 5 * tractorS);
  bezierVertex(
    tractorX + 150 * tractorS,
    tractorY - 20 * tractorS,
    tractorX + 160 * tractorS,
    tractorY - 20 * tractorS,
    tractorX + 160 * tractorS,
    tractorY - 5 * tractorS
  );
  endShape(CLOSE);
  pop();

  //PIPE FROM FRONT
  fill(50, 50, 50);
  rect(
    tractorX + 60 * tractorS,
    tractorY + 36 * tractorS,
    7 * tractorS,
    20 * tractorS
  );
  fill(100, 100, 100);
  rect(
    tractorX + 61 * tractorS,
    tractorY + 25 * tractorS,
    5 * tractorS,
    10 * tractorS
  );

  //FRONT PART
  push();
  fill(255, 0, 0);
  strokeWeight(2);
  beginShape();
  vertex(tractorX + 113 * tractorS, tractorY + 50 * tractorS);
  vertex(tractorX + 110 * tractorS, tractorY + 105 * tractorS);
  vertex(tractorX + 50 * tractorS, tractorY + 105 * tractorS);
  vertex(tractorX + 50 * tractorS, tractorY + 65 * tractorS);
  endShape();

  beginShape();
  vertex(tractorX + 110 * tractorS, tractorY + 50 * tractorS);
  vertex(tractorX + 80 * tractorS, tractorY + 50 * tractorS);
  vertex(tractorX + 30 * tractorS, tractorY + 65 * tractorS);
  vertex(tractorX + 32 * tractorS, tractorY + 105 * tractorS);
  vertex(tractorX + 50 * tractorS, tractorY + 105 * tractorS);
  vertex(tractorX + 55 * tractorS, tractorY + 68 * tractorS);
  endShape(CLOSE);
  pop();

  //GRILL
  push();
  fill(50, 50, 50);
  beginShape();
  vertex(tractorX + 30 * tractorS, tractorY + 65 * tractorS);
  vertex(tractorX + 55 * tractorS, tractorY + 68 * tractorS);
  vertex(tractorX + 53 * tractorS, tractorY + 85 * tractorS);
  vertex(tractorX + 30 * tractorS, tractorY + 83 * tractorS);
  endShape(CLOSE);
  pop();

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
