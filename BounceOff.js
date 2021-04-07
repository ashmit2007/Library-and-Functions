
var fixedRect;
var movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect= createSprite(1100, 400, 90, 120);
  movingRect = createSprite(100,400,90,60);

  fixedRect.velocityX= -3;
  movingRect.velocityX= 3;

  fixedRect.shapeColor = "green";
  movingRect.shapeColor="green";

  fixedRect.debug=true;
  movingRect.debug=true;



}

function draw() {
  background(255,255,255);  

 
  console.log(fixedRect.width/2 + movingRect.width/2);
  console.log( movingRect.x - fixedRect.x);

  if(fixedRect.x - movingRect.x <= fixedRect.width/2+movingRect.width/2 &&
    movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 )
    {
        fixedRect.velocityX = -fixedRect.velocityX;
        movingRect.velocityX = -movingRect.velocityX;
    }

    if(fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2 &&
    movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2)
    {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor="red";

  }
 
  drawSprites();
}

