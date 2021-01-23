var canvas, backgroundImg;
var gameState = 0;
var playerCount;
var allPlayers;
var database;
var form, player, game;

function preload() {
  backgroundImg = loadImage("background.jpg")
}

function setup() {
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImg)
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  drawSprites();
}