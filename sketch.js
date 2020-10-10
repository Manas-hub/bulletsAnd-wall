var bullet,wall,thickness
var speed,weight

function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
  weight=random(30,52)
  bullet=createSprite(50, 200, 70, 10);
  bullet.shapeColor = "0,250,0"
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "80,80,80";
}

function draw() {
  background(255,255,255);
  thickness=random(22,83)
  bullet.velocityX = speed;
  if(bullet.isTouching(wall)){
    Damage = 0.5 * weight * speed * speed / thickness * thickness * thickness

    if (Damage <10 ){
      bullet.shapeColor = "0,128,0"
    }
    if (Damage > 10){
      bullet.shapeColor = "255,0,0"
    }
  }  
  drawSprites();
}
function isTouching(){
if((moveRect2.X-movingRect1.X<=moveRect2.width/2+movingRect1.width/2)
  &&(movingRect1.X-moveRect2.X<= moveRect2.width/2+movingRect1.width/2)
  &&(moveRect2.Y-movingRect1.Y<=moveRect2.hieght/2+movingRect1.height/2)
  &&( movingRect1.Y-moveRect2.Y<=moveRect2.hieght/2+movingRect1.height/2)){
    isTouching=true;
    }
    else {
    isTouching=false;
    }
}