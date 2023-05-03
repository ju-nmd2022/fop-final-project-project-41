background(255, 255, 255);
push();
strokeWeight(30);
line(0, 100, 600, 250);
pop();

let chickenX = 200;
let chickenY = 200;
let chickenS = 1;

function chicken() {
  fill(255, 255, 255);
  strokeWeight(1);

  //BEAK
  push();
  fill(255, 165, 0);
  triangle(
    chickenX + 100 * chickenS,
    chickenY + 170 * chickenS,
    chickenX + 108 * chickenS,
    chickenY + 160 * chickenS,
    chickenX + 95 * chickenS,
    chickenY + 155 * chickenS
  );
  pop();

  //HEAD
  ellipse(chickenX + 85 * chickenS, chickenY + 169 * chickenS, 40 * chickenS);

  //MOHAWK
  push();
  fill(255, 0, 0);
  beginShape();
  vertex(chickenX + 75 * chickenS, chickenY + 165 * chickenS);
  bezierVertex(
    chickenX + 65 * chickenS,
    chickenY + 150 * chickenS,
    chickenX + 70 * chickenS,
    chickenY + 150 * chickenS,
    chickenX + 75 * chickenS,
    chickenY + 155 * chickenS
  );
  bezierVertex(
    chickenX + 75 * chickenS,
    chickenY + 145 * chickenS,
    chickenX + 80 * chickenS,
    chickenY + 145 * chickenS,
    chickenX + 80 * chickenS,
    chickenY + 155 * chickenS
  );
  bezierVertex(
    chickenX + 80 * chickenS,
    chickenY + 145 * chickenS,
    chickenX + 85 * chickenS,
    chickenY + 147 * chickenS,
    chickenX + 85 * chickenS,
    chickenY + 153 * chickenS
  );
  endShape(CLOSE);
  pop();

  //FEET
  push();
  fill(255, 165, 0);
  ellipse(
    chickenX + 70 * chickenS,
    chickenY + 240 * chickenS,
    25 * chickenS,
    10 * chickenS
  );
  pop();

  //BODY
  push();
  beginShape();
  vertex(chickenX + 75 * chickenS, chickenY + 170 * chickenS);
  bezierVertex(
    chickenX + 40 * chickenS,
    chickenY + 160 * chickenS,
    chickenX + 5 * chickenS,
    chickenY + 210 * chickenS,
    chickenX + 39 * chickenS,
    chickenY + 240 * chickenS
  );
  bezierVertex(
    chickenX + 90 * chickenS,
    chickenY + 260 * chickenS,
    chickenX + 118 * chickenS,
    chickenY + 190 * chickenS,
    chickenX + 75 * chickenS,
    chickenY + 170 * chickenS
  );
  endShape();
  pop();

  //WING ON SIDE
  push();
  fill(240, 240, 240);
  beginShape();
  vertex(chickenX + 85 * chickenS, chickenY + 220 * chickenS);
  bezierVertex(
    chickenX + 95 * chickenS,
    chickenY + 190 * chickenS,
    chickenX + 65 * chickenS,
    chickenY + 190 * chickenS,
    chickenX + 60 * chickenS,
    chickenY + 210 * chickenS
  );
  bezierVertex(
    chickenX + 57 * chickenS,
    chickenY + 220 * chickenS,
    chickenX + 65 * chickenS,
    chickenY + 220 * chickenS,
    chickenX + 68 * chickenS,
    chickenY + 215 * chickenS
  );
  bezierVertex(
    chickenX + 60 * chickenS,
    chickenY + 225 * chickenS,
    chickenX + 70 * chickenS,
    chickenY + 225 * chickenS,
    chickenX + 75 * chickenS,
    chickenY + 215 * chickenS
  );
  bezierVertex(
    chickenX + 72 * chickenS,
    chickenY + 230 * chickenS,
    chickenX + 85 * chickenS,
    chickenY + 225 * chickenS,
    chickenX + 85 * chickenS,
    chickenY + 220 * chickenS
  );
  endShape();
  pop();

  //WING ON BUTT
  push();
  fill(240, 240, 240);
  beginShape();
  vertex(chickenX + 30 * chickenS, chickenY + 220 * chickenS);
  bezierVertex(
    chickenX + 10 * chickenS,
    chickenY + 215 * chickenS,
    chickenX + 15 * chickenS,
    chickenY + 195 * chickenS,
    chickenX + 25 * chickenS,
    chickenY + 205 * chickenS
  );
  bezierVertex(
    chickenX + 20 * chickenS,
    chickenY + 190 * chickenS,
    chickenX + 25 * chickenS,
    chickenY + 185 * chickenS,
    chickenX + 30 * chickenS,
    chickenY + 200 * chickenS
  );
  bezierVertex(
    chickenX + 30 * chickenS,
    chickenY + 185 * chickenS,
    chickenX + 35 * chickenS,
    chickenY + 185 * chickenS,
    chickenX + 37 * chickenS,
    chickenY + 198 * chickenS
  );
  endShape(CLOSE);
  pop();
}

chicken();
