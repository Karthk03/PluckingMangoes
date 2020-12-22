
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var stone,mango = [];
var mangoArrPos = 0;
var rope;
var treeImg,boyImg;

function preload()
{
	treeImg = loadImage("tree.png");
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	stone = new Stone(100,500,25);

	ground = new Ground(650,600,1300,20);

	mango[mangoArrPos] = new Mango(1100,100,30);
	mangoArrPos++;

	mango[mangoArrPos]=new Mango(1100,100,30);
	mangoArrPos++;
	mango[mangoArrPos]=new Mango(1170,130,30);
	mangoArrPos++;
	mango[mangoArrPos]=new Mango(1010,140,30);
	mangoArrPos++;
	mango[mangoArrPos]=new Mango(1000,70,30);
	mangoArrPos++;
	mango[mangoArrPos]=new Mango(1100,70,30);
	mangoArrPos++;
	mango[mangoArrPos]=new Mango(1000,230,30);
	mangoArrPos++;
	mango[mangoArrPos]=new Mango(900,230,40);
	mangoArrPos++;
	mango[mangoArrPos]=new Mango(1140,150,40);
	mangoArrPos++;
	mango[mangoArrPos]=new Mango(1100,230,40);
	mangoArrPos++;
	mango[mangoArrPos]=new Mango(1200,200,40);
	mangoArrPos++;
	mango[mangoArrPos]=new Mango(1120,50,40);
	mangoArrPos++;
	mango[mangoArrPos]=new Mango(900,160,40);

	rope = new Rope(stone.body,{x:235,y:420})


	//Engine.run(engine);
  
}

function draw() 
{
	background("gray");
	Engine.update(engine);
	rectMode(CENTER);

	image(boyImg ,200,340,200,300);

	imageMode(CENTER);
	image(treeImg,1050,300,800,700);
  
	for(let i=0;i<= mangoArrPos; i++)
	{
		mango[i].display();
		detectollision(stone,mango[i]);
	}
  
	stone.display();
  
	rope.display();	
	
	drawSprites();
   
}


function mouseDragged()
{
	//console.log(true);
	Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY});
}

function mouseReleased()
{
    rope.launch();
}

function keyPressed()
{
    if(keyCode == 32)
    {
        rope.attach(stone.body);

        Matter.Body.setPosition(stone.body,{x: 100, y: 200});
        Matter.Body.setAngle(stone.body,0);
    }
}


function detectollision(lstone,lmango)
{
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance);
  //console.log(lmango.r+lstone.r);
  	if(distance<=lmango.radius+lstone.r)
    {
		//console.log(true);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }
