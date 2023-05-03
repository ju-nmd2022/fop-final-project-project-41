let treeX = 200;
let treeY = 200;
let treeS = 1;

background(255, 255, 255);

function tree() {
  //TRUNK
  fill(139, 69, 19);
  stroke(0, 0, 0);
  strokeWeight(2);
  beginShape();
  vertex(treeX + 180 * treeS, treeY + 50 * treeS);
  bezierVertex(
    treeX + 182 * treeS,
    treeY + 97 * treeS,
    treeX + 190 * treeS,
    treeY + 140 * treeS,
    treeX + 170 * treeS,
    treeY + 160 * treeS
  );
  bezierVertex(
    treeX + 190 * treeS,
    treeY + 165 * treeS,
    treeX + 210 * treeS,
    treeY + 165 * treeS,
    treeX + 230 * treeS,
    treeY + 160 * treeS
  );
  bezierVertex(
    treeX + 210 * treeS,
    treeY + 140 * treeS,
    treeX + 218 * treeS,
    treeY + 97 * treeS,
    treeX + 220 * treeS,
    treeY + 50 * treeS
  );
  endShape();
  //LEAVES
  fill(107, 142, 35);
  ellipse(treeX + 185 * treeS, treeY - 60 * treeS, 40 * treeS);
  ellipse(treeX + 255 * treeS, treeY + 5 * treeS, 50 * treeS);
  ellipse(treeX + 165 * treeS, treeY + 30 * treeS, 50 * treeS);
  ellipse(treeX + 240 * treeS, treeY + 40 * treeS, 40 * treeS);
  ellipse(treeX + 205 * treeS, treeY + 40 * treeS, 70 * treeS);
  ellipse(treeX + 150 * treeS, treeY - 5 * treeS, 50 * treeS);
  ellipse(treeX + 250 * treeS, treeY - 25 * treeS, 40 * treeS);
  ellipse(treeX + 165 * treeS, treeY - 45 * treeS, 60 * treeS);
  ellipse(treeX + 230 * treeS, treeY - 60 * treeS, 55 * treeS);
  noStroke();
  ellipse(treeX + 200 * treeS, treeY - 5 * treeS, 100 * treeS);
}
tree();
