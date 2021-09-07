var snowImg , girlImg,boyImg;
var boy,girl
var snowflakes= [];
var maxsnowflakes = 100;
function preload() {
  snowImg=loadImage("snow1.jpg")
  girlImg=loadImage("girl.png")
  boyImg=loadImage("boy.png")





  }
function setup() {
  createCanvas(800,400);
  boy=createSprite(300,300,10,10) 
  boy.addImage(boyImg)
  girl=createSprite(500,300,10,10) 
  girl.addImage(girlImg)

  if(frameCount % 150 === 0){
    for(var i=0; i<maxsnowflakes; i++){
    snowflakes.push(new snowflake(random(0,1200), random(0,1200)));
    }
  }  
}

function draw() {
  background(snowImg);
  Engine.update(engine);
  for(var i = 0; i<maxsnowflakes; i++){
    snowflakes[i].display();
    snowflakes[i].updateY()
    }
  drawSprites();
}

