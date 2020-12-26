var fixedRect, movingRect,wall,car;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(400, 400, 50, 80);
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite(200,200,80,30);
  movingRect.shapeColor = "green";

  car= createSprite(50,250,50,20);
  car.shapeColor="Black";
  car.velocityX=4;
  wall= createSprite(600,300,20,300);
}

function draw() {
  background("white");  
  //car.x = World.mouseX;
  //car.y = World.mouseY;

 /*if(istouching(car,wall)){
    car.shapeColor = "red";
    //fixedRect.shapeColor = "red";
  }
  else{
    car.shapeColor = "black";
    //fixedRect.shapeColor = "green";
  }*/
  
  collide(car,wall);

  drawSprites();
}

