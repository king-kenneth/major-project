
let tiles;
let levelBackground;
let empty , realwall, coin;
let tilesHigh, tilesWide;
let tileWidth, tileHeight;
let levelToLoad;
let lines;
let x = 10;
let y = 10.5;
let menu = "start";


function preload() {
  //load level data
  levelToLoad = "assets/levels/0.txt";
  lines = loadStrings(levelToLoad);

  //load background
  levelBackground = loadImage("images/WALLPAPER.jpg");

  //load tile images
  realwall = loadImage("images/k.png");
  empty = loadImage("images/k2.png");
  coin = loadImage("images/k3.png");
}

function setup() {
  // keep this a 4:3 ratio, or it will stretch in weird ways
  let h = windowHeight;
  let w = windowHeight - windowHeight/4;
  createCanvas(h, w);
  tilesHigh = lines.length;
  tilesWide = lines[0].length;

  tileWidth = width / tilesWide;
  tileHeight = height / tilesHigh;

  tiles = createEmpty2dArray(tilesWide, tilesHigh);

  //put values into 2d array of characters
  for (let y = 0; y < tilesHigh; y++) {
    for (let x = 0; x < tilesWide; x++) {
      let tileType = lines[y][x];
      tiles[x][y] = tileType;
    }
  }
}

function draw() {
  whereAmi();
}




function whereAmi(){
  if (menu === "start"){
    textAlign(CENTER);
    textSize(100);
    fill(0);
    text("pacman", windowHeight/2 , windowHeight/2);
    
  }
  
  if (mouseIsPressed){
    menu = "game";
  }

  if (menu === "game"){
    display();
    movePac();
    
  }
}

function display() {
  image(levelBackground, 0, 0, width, height);

  for (let y = 0; y < tilesHigh; y++) {
    for (let x = 0; x < tilesWide; x++) {
      showTile(tiles[x][y], x, y);
    }
  }
}

function showTile(location, x, y) {
  if (location === "2") {
    image(empty, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "1") {
    image(realwall, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "0") {
    image(coin, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  
}


function createEmpty2dArray(cols, rows) {
  let randomGrid = [];
  for (let x = 0; x < cols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
      randomGrid[x].push(0);
    }
  }
  return randomGrid;
}

function cheackforcoin(){
  if ( tiles[ floor(x) ][floor( y ) ] === "0" ) {
     tiles[ floor(x) ][floor( y )] === "2";
}
}

function movePac() { 
  
  if (keyIsDown(LEFT_ARROW)) {
    //x -= 0.1;
    checkForWall("left");
  }

  if (keyIsDown(RIGHT_ARROW)) {
    // x += 0.1;
    checkForWall("right");
  }

  if (keyIsDown(UP_ARROW)) {
    // y -= 0.1;
    checkForWall("up");
  }

  if (keyIsDown(DOWN_ARROW)) {
    // y += 0.1;
    checkForWall("down");
  }
  fill(255, 204, 0);
  ellipse(x * tileWidth , y * tileHeight, tileWidth, tileHeight);
  
}



function checkForWall(direction){
  let nothing = 0;
  if (direction === "left" ){
    if ( tiles[ floor( x - 0.5) ][floor( y ) ] !== "0" ) {
      x += nothing; // Collision
    }
    else{
      x -= 0.1; //move
    }
  }
  if (direction === "right"){
    if ( tiles[floor( x + 0.5) ][ floor( y ) ] !== "0" ) {
      x += nothing; // Collision
    }
    else{
      x += 0.1;//move
    }
  }
  if (direction === "up"){
    if ( tiles[ floor( x  ) ][ floor( y - 0.5) ] !== "0" ) {
      y += nothing; // Collision
    }
    else{
      y -= 0.1;//move
    }
  }
  if ( direction === "down" ){
    if ( tiles[floor( x  ) ][floor( y + 0.5) ] !== "0" ){
      y += nothing; // Collision
    }
    else{
      y += 0.1;//move
    }
  }
}



//hahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahaha
//i suck at coding + i need to stay on task