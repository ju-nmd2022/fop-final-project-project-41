background(107, 142, 35);

let roadsX = 200;
let roadsY = 200;

function roads() {
  stroke(244, 204, 140);
  strokeWeight(50);
  line(roadsX - 200, roadsY, roadsX + 400, roadsY + 100);
  line(roadsX - 200, roadsY - 200, roadsX + 400, roadsY - 100);
  line(roadsX - 200, roadsY - 400, roadsX + 400, roadsY - 300);
  stroke(135, 206, 250);
  line(roadsX - 200, roadsY - 600, roadsX + 400, roadsY - 500);
}
roads();

function draw() {
  background(107, 142, 35);
  roads();
  roadsY += 2;
}

/* if roads is equal to this y position I have to make it either stop. */
