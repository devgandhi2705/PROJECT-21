var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);

bullet = createSprite(50,200,60,15);
bullet.shapeColor = rgb(80,80,80);

 wall = createSprite(1200,200,random(22,83),200);
 wall.shapeColor = rgb(230, 143, 0);

speed = random(223,321);
weight = random(30,52);
thickness = random(22,83);
}

function draw() {
  background(0);
  
  

  bullet.velocityX = speed;

  if(hasCollided(wall,bullet)){
  bullet.velocityX = 0;
  var damage = (0.5*speed*speed*weight)/(thickness*thickness*thickness);
  bullet.x = wall.x - ((wall.width + bullet.width)/2);
  }

  if(damage > 10){
    bullet.shapeColor = color(255,0,0);
  }

  if(damage < 10){
    bullet.shapeColor = color(0,255,0);
  }
  
  drawSprites();
}

function hasCollided(wall1,bullet1){

bulletRightEdge = bullet1.x + bullet1.width;
wallLeftRightEdge = wall.x;
if(bulletRightEdge>=wallLeftRightEdge){
  return true
}
return false;
}



