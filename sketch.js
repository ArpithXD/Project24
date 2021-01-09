
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	g = new Ground(500,650,1000,20);
	bin = new Bin(792,550,200,200);	
	paPer = new Paper(175,100,50);

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(200);

  paPer.display();
  g.display();
  bin.display();
 
  keyPressed();
  drawSprites();
 
}

function keyPressed() {	
	if (keyDown(UP_ARROW)) {
		Matter.Body.applyForce(paPer.body,paPer.body.position,{x:20,y:-49});
	}

	if (keyDown(DOWN_ARROW)) {
		Matter.Body.applyForce(paPer.body,paPer.body.position,{x:-20,y:-49});
	}

	if (keyDown(RIGHT_ARROW)) {
		Matter.Body.applyForce(paPer.body,paPer.body.position,{x:20,y:49});
	}

	if (keyDown(LEFT_ARROW)) {
		Matter.Body.applyForce(paPer.body,paPer.body.position,{x:-20,y:49});
	}
}


