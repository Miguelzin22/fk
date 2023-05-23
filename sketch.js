var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)
pista1=loadImage("path.png");
  //loadAnimation (carregarAnimação) de corrida para o menino
 joão=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
 pista = createSprite(200,200);
//adicione uma imagem para a pista
pista.addImage (pista1);
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
pista.velocityY = (5);
pista.scale=1.2;

//crie um sprite de menino
menino = createSprite (200,300);
//adicione uma animação de corrida para ele
menino.addAnimation(joão);
menino.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible=(false);
//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
rightBoundary.visible=(false);
}

function draw() {
  background(0);
  pista.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  menino.mouseX
  edges= createEdgeSprites();
  menino.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(pista.y > 400 ){
    pista.y = height/2;
  }
  
  drawSprites();
}
