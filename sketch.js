var road;
function preload(){
  bgimg = loadImage("track.jpg");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  background = createSprite(width/2,height/2,width,height);
  background.addImage(bgimg);
  background.velocityX = -9;
  background.scale = 0.9;
}

function draw() {
  //background(220);
  console.log(background.y);
  if(background.y<300){
    background.y = background.height/2;
  }
  //console.log(background.height);
  drawSprites();
}