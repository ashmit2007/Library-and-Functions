var fixedRect;
var movingRect;
var Rect1;
var Rect2;
var Rect3;
var Rect4;

function setup() {
  createCanvas(1200,800);
  fixedRect= createSprite(600, 400, 90, 120);
  movingRect = createSprite(100,100,90,60);
  Rect1 = createSprite(100,100,50,50);
  Rect2 = createSprite(200,100,50,50);
  Rect3 = createSprite(300,100,50,50);
  Rect4 = createSprite(400,100,50,50);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor="green";
  Rect1.shapeColor = "red";
  Rect2.shapeColor = "blue";
  Rect3.shapeColor = "yellow";
  Rect4.shapeColor = "pink";

  fixedRect.debug=true;
  movingRect.debug=true;

  Rect1.velocityX = 3;
  Rect4.velocityX = -3;



}

function draw() {
  background(255,255,255);  

  movingRect.x=mouseX;
  movingRect.y= mouseY;

  console.log(fixedRect.width/2 + movingRect.width/2);
  console.log( movingRect.x - fixedRect.x);

  if(isTouching(Rect1, movingRect)){
    movingRect.shapeColor = "blue";
    Rect1.shapeColor = "green";
  
  }
  else{
    Rect1.shapeColor = "red";
    movingRect.shapeColor="green";
  }

BounceOff(Rect1, Rect4);
  
  drawSprites();


}

