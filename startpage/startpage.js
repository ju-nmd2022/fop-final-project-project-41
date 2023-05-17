let backgroundImage;
let button;
let image1, image2, image3;

function preload() {
  backgroundImage = loadImage("farmBackground.jpg");
  image1 = loadImage("pig.png");
  image2 = loadImage("lamb.png");
  image3 = loadImage("chicken.png");
  logo = loadImage("Countrylogo.png");
}

function setup() {
  createCanvas(1024, 768);

  // Create the button
  button = createButton("Start Game");
  button.position(450, 570);
  button.size(200, 50);
  button.style("font-size", "24px");

  button.mousePressed(buttonPressed);
}

function buttonPressed() {
  console.log("Button pressed!");
}

function draw() {
  background(backgroundImage);

  fill(255, 255, 255);
  noStroke();
  rect(90, 230, 860, 260);

  image(image1, 400, 250, image1.width * 0.27, image1.height * 0.27); // Scale down the image by half
  image(image2, 650, 250, image1.width * 0.37, image1.height * 0.27);
  image(image3, 170, 250, image1.width * 0.24, image1.height * 0.34);
  image(logo, 360, 40);
}
