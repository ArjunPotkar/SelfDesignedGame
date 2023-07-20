var track;
var canvas;
var form;
var backgroundImage;
var game;
var player;
var playerCount;
var gameState;

function preload(){
  track=loadImage("./assets/track.jpg");
  backgroundImage = loadImage("./assets/background.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database=firebase.database();
  game=new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);  
  if(playerCount === 2){
    game.update(1);
  }
if(gameState===1){
  game.play();
}
  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
