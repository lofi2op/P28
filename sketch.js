const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	trashObject = new Trash(200,450,70);
	groundObject = new ground(width/2,670,width,20);
	dustbinObject = new dustbin(1200,650);

	Launcher = new Launcher(trashObject.body,{x:200,y:200})	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  trashObject.display();
  groundObject.display();
  dustbinObject.display();
  Launcher.display();

  
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(trashObject.body,trashObject.body.position,{x:130,y:-145});

    
  	}
}

function mouseDragged(){
	Matter.Body.setPosition(trashObject.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	Launcher.fly();
}




