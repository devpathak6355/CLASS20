var movingRect, fixedRect;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(200,200,50,50);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  fixedRect.debug="true";
  movingRect.debug="true";
}

function draw() {
  background("black"); 
  movingRect.x=World.mouseX ;
  movingRect.y=World.mouseY ;
  if(movingRect.x-fixedRect.x<(movingRect.width+fixedRect.width)/2
  && fixedRect.x-movingRect.x<(movingRect.width+fixedRect.width)/2
  && fixedRect.y-movingRect.y<(fixedRect.height+movingRect.height)/2
  && movingRect.y-fixedRect.y<(fixedRect.height+movingRect.height)/2 ){
    fixedRect.shapeColor="red";
     movingRect.shapeColor="red";
  }
  else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  drawSprites();
}