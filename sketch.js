
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	engine.updade(engine);
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	rotator1 = Bodies.rectangle(250, 200, 150, 20, rotator_options);
	World.add(world, rotator1);

	rotator2 = Bodies.rectangle(250, 200, 150, 20, rotator_options);
	World.add(world, rotator1);

	rotator3 = Bodies.rectangle(250, 200, 150, 20, rotator_options);
	World.add(world, rotator1);

	var particle_options = {
 restitution: 0.4,
friction:0.02
}
particle1 = Bodies.circle(220, 18, 18, particle_options);
 World.add(world, particle1);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  drawSprites();
 
}



