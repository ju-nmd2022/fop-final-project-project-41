let barnX = 200;
let barnY = 200;
let barnS = 1;

background(107, 142, 35);

function barn() {
  //GREY PART OF ROOF
  fill(100, 100, 100);
  beginShape();
  vertex(barnX + 90 * barnS, barnY - 85 * barnS);
  vertex(barnX + 170 * barnS, barnY - 83 * barnS);
  vertex(barnX + 200 * barnS, barnY - 55 * barnS);
  vertex(barnX + 217 * barnS, barnY - 20 * barnS);
  vertex(barnX + 120 * barnS, barnY + barnS);
  endShape(CLOSE);

  //RED PARTS
  fill(255, 0, 0);
  strokeWeight(2);
  beginShape();
  vertex(barnX + barnS, barnY + barnS);
  vertex(barnX + 10 * barnS, barnY + 50 * barnS);
  vertex(barnX + 130 * barnS, barnY + 60 * barnS);
  vertex(barnX + 145 * barnS, barnY - 10 * barnS);
  bezierVertex(
    barnX + 100 * barnS,
    barnY - 130 * barnS,
    barnX + 15 * barnS,
    barnY - 90 * barnS,
    barnX + barnS,
    barnY + barnS
  );
  endShape();
  beginShape();
  vertex(barnX + 130 * barnS, barnY + 60 * barnS);
  vertex(barnX + 210 * barnS, barnY + 45 * barnS);
  vertex(barnX + 215 * barnS, barnY - 15 * barnS);
  vertex(barnX + 145 * barnS, barnY - 10 * barnS);
  endShape();

  // WHITE PART OF ROOF
  fill(255, 255, 255);
  strokeWeight(1);
  beginShape();
  vertex(barnX + 217 * barnS, barnY - 13 * barnS);
  vertex(barnX + 145 * barnS, barnY - 8 * barnS);
  vertex(barnX + 120 * barnS, barnY - 55 * barnS);
  vertex(barnX + 90 * barnS, barnY - 80 * barnS);
  vertex(barnX + 50 * barnS, barnY - 80 * barnS);
  vertex(barnX + 30 * barnS, barnY - 60 * barnS);
  vertex(barnX + barnS, barnY + barnS);
  vertex(barnX - 5 * barnS, barnY - 5 * barnS);
  vertex(barnX + 25 * barnS, barnY - 65 * barnS);
  vertex(barnX + 45 * barnS, barnY - 86 * barnS);
  vertex(barnX + 95 * barnS, barnY - 86 * barnS);
  vertex(barnX + 128 * barnS, barnY - 57 * barnS);
  vertex(barnX + 149 * barnS, barnY - 15 * barnS);
  vertex(barnX + 217 * barnS, barnY - 20 * barnS);
  endShape(CLOSE);

  //WINDOWS
  fill(139, 69, 19);
  stroke(255, 255, 255);
  strokeWeight(4);
  rect(barnX + 55 * barnS, barnY - 45 * barnS, 30 * barnS, 30 * barnS);
  rect(barnX + 155 * barnS, barnY + barnS, 15 * barnS, 25 * barnS);
  rect(barnX + 180 * barnS, barnY - 2 * barnS, 15 * barnS, 25 * barnS);
  beginShape();
  vertex(barnX + 40 * barnS, barnY + 53 * barnS);
  vertex(barnX + 40 * barnS, barnY + 10 * barnS);
  vertex(barnX + 90 * barnS, barnY + 12 * barnS);
  vertex(barnX + 85 * barnS, barnY + 56 * barnS);
  endShape();
  line(
    barnX + 40 * barnS,
    barnY + 10 * barnS,
    barnX + 85 * barnS,
    barnY + 55 * barnS
  );
  line(
    barnX + 90 * barnS,
    barnY + 12 * barnS,
    barnX + 40 * barnS,
    barnY + 55 * barnS
  );
  line(
    barnX + 155 * barnS,
    barnY + barnS,
    barnX + 170 * barnS,
    barnY + 25 * barnS
  );
  line(
    barnX + 180 * barnS,
    barnY + barnS,
    barnX + 193 * barnS,
    barnY + 20 * barnS
  );
  fill(244, 204, 140);
  noStroke();
  rect(barnX + 57 * barnS, barnY - 30 * barnS, 26 * barnS, 13 * barnS);
}
barn();
