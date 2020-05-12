var rect1,rect2,rect3,rect4;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  rect1sprite =  createSprite(400,275,300,300);
  rect2sprite = createSprite(100,275,100,300)
}

function draw() {
  background(0);  
  drawSprites();
}