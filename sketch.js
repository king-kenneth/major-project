
let tiles;
let levelBackground;
let platform , empty;
let tilesHigh, tilesWide;
let tileWidth, tileHeight;
let levelToLoad;
let lines;
let x, y ;

function preload() {
  //load level data
  levelToLoad = "assets/levels/0.txt";
  lines = loadStrings(levelToLoad);

  //load background
  levelBackground = loadImage("images/WALLPAPER.jpg");

  //load tile images
  platform = loadImage("images/k.png");
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
  display();
  keyPressed();
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
  if (location === ".") {
    image(platform, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "C") {
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


// function mousePressed(){
//   let xcoord = floor(mouseX / tilesWide);
//   let ycoord = floor(mouseY / tileHeight);

//   if (grid[ycoord][xcoord] === 1){
//     grid[ycoord][xcoord] = 0;
//   }
// }
function keyPressed() {
  let x = 10;
  let y = 10;
  let xcoord = floor(x / tilesWide);
  let ycoord = floor(y / tileHeight);

  if (keyCode === LEFT_ARROW) {
    while (xcoord > 0){
      xcoord -= 10;
    }
  }
  else if (keyCode === RIGHT_ARROW) {
    while (xcoord+tileWidth < width){
      xcoord += 10;
    }
  }
  ellipse(xcoord,ycoord,tileWidth,tileHeight);
}

  

