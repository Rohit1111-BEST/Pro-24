var  trashSprite,trashBody;
var  ground, box;
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
	

    


	trashSprite=createSprite(width/2, 80, 10,10);
	

	
	
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	trashBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, trashBody);

	trashSprite.x= trashBody.position.x;
	trashSprite.y= trashBody.position.y;

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 box = Bodies.rectangle(width/2, 500, width, 10, {isStatic:true});
	 World.add(world, box);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(box.position.x,box.position.y,500,10);

  trashSprite.x= trashBody.position.x 
  trashSprite.y= trashBody.position.y 
  drawSprites();
 
}

function keyPressed() {

 if (keyCode === DOWN_ARROW) {
	
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(trashBody,false);
  }
}