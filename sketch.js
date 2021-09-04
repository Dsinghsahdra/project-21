var astronaut;
var bg,sleep,brush,gym,eat,drink,move,bath;



function preload(){
  bg=loadImage("images/iss.png");
 sleep=loadAnimation("images/sleep.png");
  brush=loadAnimation("images/brush.png");
  gym=loadAnimation("images/gym1.png");
  gym=loadAnimation("images/gym2.png");
  gym=loadAnimation("images/gym11.png");
  gym=loadAnimation("images/gym12.png");
  
  eat=loadAnimation("images/eat1.png");
  eat=loadAnimation("images/eat2.png");

  drink=loadAnimation("images/drink1.png");
  drink=loadAnimation("images/drink2.png");

  move=loadAnimation("images/move.png");
  move=loadAnimation("images/move1.png");

  bath=loadAnimation("images/bath1.png");
  bath=loadAnimation("images/bath2.png");
}








function setup() {
  createCanvas(400, 400);

  astronaut=creatSprite(300,230);
  astronaut.addAnimation("sleep.png",sleep);
  astronaut.scale=0.1;


  if(keydown("UP_ARROW")){
    astronaut.addAnimation("brush.png",brush);
    astronaut.changeAnimation("brush.png");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
}
if(keydown("DOWN_ARROW")){
  astronaut.addAnimation("gym1.png",gym);
  astronaut.changeAnimation("gym1.png");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;}

  if(keydown("LEFT_ARROW")){
    astronaut.addAnimation("eat1.png",eat);
    astronaut.changeAnimation("eat1.png");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;}

    if(keydown("RIGHT_ARROW")){
      astronaut.addAnimation("bath1.png",bath);
      astronaut.changeAnimation("bath1.png");
      astronaut.y=350;
      astronaut.velocityX=0;
      astronaut.velocityY=0;}
      
      if(keydown("m")){
        astronaut.addAnimation("move.png",move);
        astronaut.changeAnimation("move.png");
        astronaut.y=350;
        astronaut.velocityX=10;
        astronaut.velocityY=-10;}
           
}

function draw() {
  background(220);
  background.addImage("iss.png");

  drawSpirites();
}