var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;



function preload(){

  //* Alterado os nome da variável "patch" para "pathImg"
  //path = loadImage("path.png");
  pathImg = loadImage("path.png");

   //* Alterado os nome da variável "patch_boy" para "boyImg"
  //path_boy = loadAnimation("Runner-1.png","Runner-2.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
createCanvas(400,400);
//*alterado posição x e y do Sprite
//path = createSprite(0, 0, 200, 400);
path = createSprite(200,200);

//*a função para adicionar imagem é do tipo sprite.addImage("name")
//path = addImage(pathImage);
path.addImage(pathImg);

path.scale=1.2;
path.velocityY = 10;

//* Alterado os nome da variável "patch_boy" para "boy"
//path_boy = createSprite(200, 350, 30, 30);
//path_boy = addAnimation("path_boy", boyImg);
//path_boy.scale=0.08;
boy = createSprite(200, 350, 30, 30);
boy.addAnimation("path_boy", boyImg);
boy.scale=0.08;
  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  //* Alterado os nome da variável "patch_boy" para "boy"
  //* Alterado a função para "mouseX"
  //path_boy.x = MouseEvent.clientX; 
   boy.x= World.mouseX;
  
  edges= createEdgeSprites();

  //* Alterado os nome da variável "patch_boy" para "boy"
  //path_boy.collide(edges[3]);
  //path_boy.collide(rightBoundary);
  //path_boy.collide(leftBoundary);
  boy.collide(edges[3]);
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);
  
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
