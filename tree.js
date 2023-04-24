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
  vertex(380, 250);
  bezierVertex(382, 297, 390, 340, 370, 360);
  bezierVertex(390, 365, 410, 365, 430, 360);
  bezierVertex(410, 340, 418, 297, 420, 250);
  endShape();
  //LEAVES
  fill(107, 142, 35);
  ellipse(385, 140, 40);
  ellipse(455, 205, 50);
  ellipse(365, 230, 50);
  ellipse(440, 240, 40);
  ellipse(405, 240, 70);
  ellipse(350, 195, 50);
  ellipse(450, 175, 40);
  ellipse(365, 155, 60);
  ellipse(430, 140, 55);
  /*ellipse(385, 195, 50);
  ellipse(405, 165, 30);
  ellipse(418, 192, 50); */
  noStroke();
  ellipse(400, 195, 100);
}
tree();
