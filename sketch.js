
function preload() {
    //load the images here
 cat_image = loadImage ("images/cat1.png");
 cat_running = loadAnimation ("images/cat2.png","images/cat3.png");
 cat_end = loadAnimation ("images/cat4.png");
 backgroundImage = loadImage ("images/garden.png")
 mouseImage = loadImage ("images/mouse4.png")
 mouse_teasing = loadAnimation ("images/mouse2.png","images/mouse3.png")
 mouse_end = loadAnimation ("images/mouse1.png")
}

function setup(){
    createCanvas(1000,1000);
    //create tom and jerry sprites here
 cat = createSprite (810,850,40,40);
 cat.addImage (cat_image);
 cat.scale = 0.25;
 mouse = createSprite(100,900,40,40)
 mouse.addImage (mouseImage)
 mouse.scale = 0.1

 //background = createSprite (0,0,)
}

function draw() {

    background(backgroundImage);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
      cat.addAnimation ("cat3",cat_end)
      cat.changeAnimation ("cat3")
      mouse.addAnimation ("mouse3",mouse_end)
      mouse.changeAnimation ("mouse3")
      cat.velocityX = 0
      
    }
    drawSprites();
}


function keyPressed(){
if(keyCode == LEFT_ARROW){
  cat.addAnimation ("cat2",cat_running)
  cat.changeAnimation ("cat2")
  mouse.addAnimation ("mouse2",mouse_teasing)
  mouse.changeAnimation ("mouse2")
  mouse.frameDelay = 25
  cat.velocityX = -3
}
}
