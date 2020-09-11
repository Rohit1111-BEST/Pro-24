var  paper,paperBody;
var  ground, dustbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;







function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	ground=new Ground(width/2, height-35, width,10);
	dustbin1 = new Dustbin(420,height-50, 70,10);
	dustbin2 = new Dustbin(460,height-80,10,50);
	dustbin3 = new Dustbin(380,height-80,10,50);
	paper = new Paper(200,200,20,20);

	DustbinBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, paperBody);

	paper.x= paperBody.position.x;
	paper.y= paperBody.position.y;

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 dustbin = Bodies.rectangle(width/2, 500, width, 10, {isStatic:true});
	 World.add(world, dustbin);


	Engine.run(engine);


ground.display();
dustinbin1.display();
dustinbin2.display();
dustinbin3.display();
paper.display();
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(dustbin.position.x,dustbin.position.y,500,10);



  drawSprites();
 
}

function keyPressed() {

 if (keyCode === UP_ARROW) {
	
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  }
}