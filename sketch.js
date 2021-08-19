var boy, boy_running;
var road, roadImage;
var rightEdge;
var leftEdge;


function preload(){
  //pre-load images
  boy_running = loadAnimation("Runner-1.png", "Runner-2.png");
  roadImage = loadImage("path.png");
} 

function setup(){
  createCanvas(400,400);
  //create sprites here
  road = createSprite(200,200);
  road.addImage(roadImage);
  road.scale = 1.3;
 
  boy = createSprite(325,350,20,20); 
  boy.addAnimation("running", boy_running);
  boy.scale = 0.06;

  rightEdge = createSprite(10,200,10,400);
  rightEdge.visible = false;

  leftEdge = createSprite(390,200,10,400);
  leftEdge.visible = false;

}


function draw() {
  background(0);

  road.velocityY = 3;

  boy.x = mouseX;

  if(road.y > 600) {
    road.y = height/2;
  }

  boy.collide(rightEdge);

  boy.collide(leftEdge);

  drawSprites();
}
