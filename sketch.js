const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Mouse=Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var ground;

var paper, paper1;

var apple, apple1;

var banana, banana1;

var battery, battery1;

var blackdus, blackdus1;

var bluedus, bluedus1;

var book, book1;

var bottle, bottle1;

var bttle, bottle2;

var brokenplate, brokenplate1;

var photo, photo1;

var  cup1, cup1Img;

var cup2, cup2Img;

var cup3, cup3Img;

var earbud1, earbud1Img;

var fish1, fish1Img;

var glass1, glass1Img;

var greendus1, greendus1Img;

var yellowdus1, yellowdus1Img;

var jar1, jar1Img;

var laptop1, laptop1Img;

var meat1, meat1Img;

var mobile1, mobile1Img;

var mouse1, mouse1Img;

var newspaper1, newspaper1Img;

var newspaper2, newspaper2Img;

var orange1, orange1Img;

var oven1, oven1Img;

var peel1, peel1Img;

var peel2, peel2Img;

var plastic1, plastic1Img;

var spoon1, spoon1Img;

var toiletpaper1, toiletpaper1Img;

var wineglass, wineglass1Img;

function preload(){
paper=loadImage("images/paper2.png");

apple=loadImage("images/apple1.png");

banana=loadImage("images/bananapeel.png");

battery=loadImage("images/battery.png");

blackdus=loadImage("images/black.png");

bluedus=loadImage("images/blue.png");

book=loadImage("images/book.png");

bottle=loadImage("images/bottle.png");

bttle=loadImage("images/bottle2.png");

brokenplate=loadImage("images/broken plate.png");

photo=loadImage("images/camera.png");

cup1Img=loadImage("images/cup2.png");

cup2Img=loadImage("images/cup3.png");

cup3Img=loadImage("images/cup4.png");

earbud1Img=loadImage("images/earbuds.png");

fish1Img=loadImage("images/fish.png");

glass1Img=loadImage("images/glass1.png");

greendus1Img=loadImage("images/green.png");

yellowdus1Img=loadImage("images/yellow.png");

jar1Img=loadImage("images/jar.png");

laptop1Img=loadImage("images/laptop.png");

meat1Img=loadImage("images/meat.png");

mobile1Img=loadImage("images/mobile2.png");

mouse1Img=loadImage("images/mouse.png");

newspaper1Img=loadImage("images/newspaper2.png");

newspaper2Img=loadImage("images/newspaper3.png");

orange1Img=loadImage("images/orangepeel.png");

oven1Img=loadImage("images/oven.png");

peel1Img=loadImage("images/peel2.png");

peel2Img=loadImage("images/peel3.png");

plasticbag1Img=loadImage("images/plasticbag.png");

plate1Img=loadImage("images/plate.png");

spoon1Img=loadImage("images/spoon.png");

toiletpaper1Img=loadImage("images/toiletpaper.png");

wineglass1Img=loadImage("images/wineglass2.png");


}
function setup() {

  createCanvas(1300,550);
  engine = Engine.create();
  world = engine.world;
  
  paper1=createSprite(200,465,50,50);
  paper1.addImage("paper", paper)
  paper1.scale=0.2;

  appl1=createSprite(260,445,50,50);
  appl1.addImage("apple", apple)
  appl1.scale=0.2;

  banana1=createSprite(320,450,50,50);
  banana1.addImage("banana", banana)
  banana1.scale=0.15;

  battery1=createSprite(360,450,50,50);
  battery1.addImage("battery", battery)
  battery1.scale=0.15;

  blackdus1=createSprite(1220,395,50,50);
  blackdus1.addImage("blackdus", blackdus)
  blackdus1.scale=0.58;

  bluedus1=createSprite(1083,400,50,50);
  bluedus1.addImage("bluedus", bluedus)
  bluedus1.scale=0.50;

  book1=createSprite(290,410,50,50);
  book1.addImage("book", book)
  book1.scale=0.50;

  bottle1=createSprite(450,450,50,50);
  bottle1.addImage("bottle", bottle)
  bottle1.scale=0.2;

  bottle2=createSprite(395,440,50,50);
  bottle2.addImage("bttle", bttle)
  bottle2.scale=0.2;

  bottle2=createSprite(395,440,50,50);
  bottle2.addImage("bttle", bttle)
  bottle2.scale=0.2;

  brokenplate1=createSprite(120,470,50,50);
  brokenplate1.addImage("brokenplate", brokenplate)
  brokenplate1.scale=0.2;

  photo1=createSprite(490,470,50,50);
  photo1.addImage("photo", photo)
  photo1.scale=0.30;

  cup1=createSprite(520,460,50,50);
  cup1.addImage("cup", cup1Img)
  cup1.scale=0.03;

  cup2=createSprite(420,465,50,50);
  cup2.addImage("cup2", cup2Img)
  cup2.scale=0.2;

  cup3=createSprite(230,454,50,50);
  cup3.addImage("cup3", cup3Img)
  cup3.scale=0.15;

  earbud1=createSprite(540,472,50,50);
  earbud1.addImage("earbud", earbud1Img)
  earbud1.scale=0.15;

  fish1=createSprite(180,420,50,50);
  fish1.addImage("fish", fish1Img)
  fish1.scale=0.2;

  glass1=createSprite(120,420,50,50);
  glass1.addImage("glass", glass1Img)
  glass1.scale=0.2;

  greendus1=createSprite(924,400,50,50);
  greendus1.addImage("greendus", greendus1Img)
  greendus1.scale=0.50;

  yellowdus1=createSprite(780,395,50,50);
  yellowdus1.addImage("yellowdus", yellowdus1Img)
  yellowdus1.scale=0.58;

  jar1=createSprite(60,462,50,50);
  jar1.addImage("jar", jar1Img)
  jar1.scale=0.03;

  laptop1=createSprite(580,465,50,50);
  laptop1.addImage("laptop", laptop1Img)
  laptop1.scale=0.15;

  meat1=createSprite(288,472,50,50);
  meat1.addImage("meat", meat1Img)
  meat1.scale=0.15;

  mobile1=createSprite(208,472,50,50);
  mobile1.addImage("mobile", mobile1Img)
  mobile1.scale=0.15;

  mouse1=createSprite(450,455,50,50);
  mouse1.addImage("mouse", mouse1Img)
  mouse1.scale=0.04;

  newspaper1=createSprite(340,410,50,50);
  newspaper1.addImage("newspaper", newspaper1Img)
  newspaper1.scale=0.04;

  newspaper2=createSprite(320,370,50,50);
  newspaper2.addImage("newspaper1", newspaper2Img)
  newspaper2.scale=0.25;

  orange1=createSprite(150,415,50,50);
  orange1.addImage("orange", orange1Img)
  orange1.scale=0.06;

  oven1=createSprite(440,415,50,50);
  oven1.addImage("oven", oven1Img)
  oven1.scale=0.30;

  peel1=createSprite(260,470,50,50);
  peel1.addImage("peel", peel1Img)
  peel1.scale=0.02;

  peel2=createSprite(220,415,50,50);
  peel2.addImage("peel1", peel2Img)
  peel2.scale=0.15;

  plasticbag1=createSprite(370,400,50,50);
  plasticbag1.addImage("orange", plasticbag1Img)
  plasticbag1.scale=0.15;

  plate1=createSprite(420,370,50,50);
  plate1.addImage("plate", plate1Img)
  plate1.scale=0.06;

  spoon1=createSprite(520,430,50,50);
  spoon1.addImage("spoon", spoon1Img)
  spoon1.scale=0.15;

  toiletpaper1=createSprite(510,400,50,50);
  toiletpaper1.addImage("toiletpaper", toiletpaper1Img)
  toiletpaper1.scale=0.18;

  wineglass1=createSprite(90,460,50,50);
  wineglass1.addImage("wineglass", wineglass1Img)
  wineglass1.scale=0.09;

  ground = new Ground(450,500,1700,20);
  //createCanvas(1350,600);
  //createSprite(10, 15, 2200, 1100);

  var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

	//Engine.run(engine);
	//Render.run(render);

	const mouse = Mouse.create(canvas.render);
const options = {
    mouse: mouse
  };

  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);


 // Engine.run(engine);
}

function draw() {
 
  background(130);  
  drawSprites();
 
  ground.display();
 
  paper1.display();
 
  appl1.display();
 
  banana1.display();
 
  battery1.display();
 
  blackdus1.display();
 
  bluedus1.display();
 
  book1.display();
 
  bottle1.display();
 
  bottle2.display();
 
  brokenplate1.display();
 
  photo1.display();
 
  cup1.display();
 
  cup2.display();

  cup3.display();

  earbud1.display();

  fish1.display();

  glass1.display();

  greendus1.display();

  yellowdus1.display();

  jar1.display();

  laptop1.display();

  meat1.display();

  mobile1.display();

  mouse1.display();

  newspaper1.display();

  newspaper2.display();

  orange1.display();

  oven1.display();

  peel1.display();

  peel2.display();

  plasticbag1.display();

  plate1.display();

  spoon1.display();

  toiletpaper1.display();

  wineglass1.display();

//fill("white")
//textSize(22)
//text("Organic",1170,600);
  
//fill("white")
//textSize(22)
//text("Paper",985,600);
}
