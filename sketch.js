
let tiles;
let levelBackground;
let wall , empty;
let tilesHigh, tilesWide;
let tileWidth, tileHeight;
let levelToLoad;
let lines;
let x = 10;
let y = 10.5;

let gameState = "menu";

function preload() {
  //load level data
  levelToLoad = "assets/levels/0.txt";
  lines = loadStrings(levelToLoad);

  //load background
  levelBackground = loadImage("images/WALLPAPER.jpg");

  //load tile images
  wall = loadImage("images/k.png");
  empty = loadImage("images/k2.png");
}

function setup() {
  // keep this a 4:3 ratio, or it will stretch in weird ways
  createCanvas(1000, 750);

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
  
  // display();
  // movePac();
  
}

function whereAmi(){
  if (gameState === "menu")  {
    text("TEST", 50, 50);
    textAlign(CENTER);
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
  if (location === "0") {
    image(wall, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "1") {
    image(empty, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
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

function movePac() {
  
  if (keyIsDown(LEFT_ARROW)) {
    // x -= 0.1;
    moveme("left");
  }

  if (keyIsDown(RIGHT_ARROW)) {
    // x += 0.1;
    moveme("right");
  }

  if (keyIsDown(UP_ARROW)) {
    // y -= 0.1;
    moveme("up");
  }

  if (keyIsDown(DOWN_ARROW)) {
    // y += 0.1;
    moveme("down");
  }
  ellipse(x * tileWidth , y * tileHeight, tileWidth, tileHeight);
}

function moveme(direction){
//   if (direction === "left" ){
//     if ( levelToLoad[ Math.round( x ) ][ Math.round( y ) ] == "0" ) {
//     }
//       if (move = true){
//         x -= 0.1
//       }


//     // else{
//     //   move = true;
//     //   x -= 0.1;
//     // }
//   }
//   if (direction === "right"){
//     x += 0.1;
//   }
//   if (direction === "up"){
//     y -= 0.1;
//   }
//   if ( direction === "down" ){
//     y += 0.1;
//   }
}

function checkForWall(){
   
// }
// if ( levelToLoad[ Math.round( x ) ][ Math.round( y ) ] !== 0 ) {
//     return true; // Collision
//     }
//   else{
//     return false;
}
