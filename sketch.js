//Physics Engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//adding the var for engine and the world
var myEngine, myWorld;

function setup() {
	createCanvas(800, 400);

    //creating the engine
	myEngine = Engine.create();

	//adding engine to the world
	myWorld = myEngine.world;

	//Creating the bodies
     roof = new Roof();
	 bob1= new Bob(300,300);
	 bob2= new Bob(350,300);
	 bob3= new Bob(400,300);
	 bob4= new Bob(450,300);
	 bob5= new Bob(500,300);

	 rope1 = new Rope (bob1.body, roof.body,300);
	 rope2 = new Rope (bob2.body, roof.body,350);
	 rope3 = new Rope (bob3.body, roof.body,400);
	 rope4 = new Rope (bob4.body, roof.body,450);
	 rope5 = new Rope (bob5.body, roof.body,500);
}


function draw() {
  //adding a background
  background(0);
  rectMode(CENTER);
  Engine.update(myEngine);
  
 //siplaying all the bodies

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

//adding the function to make the cradle move
function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-50, y:-50});
	}
}

