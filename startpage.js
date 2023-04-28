var canvas = document.getElementById("myCanvas");

var button = document.getElementById("startButton");
button.addEventListener("click", function () {
  // Code to execute when button is clicked
  window.open("gamepage.html"); // Replace "other_page.html" with the URL of the page you want to open
});

/* addEventlistener on click for each of the animals and make the right one appear for the game screen 
and the right one for the ending text. Using if else statements. 
We need to figure out a plan exactly in what order to code things so that it can all go together. 
Let's start by picking your animal and getting them to jump in the correct way. Dont forget that we have to 
look at where to place the highscore board as well. How it is functioning is a later problem 
though I think. We have to just figure out the main structure as well, how is everything connected to each other, 
like all of the screens, are we putting it all into index.html. Do we have to have an index.html?*/
