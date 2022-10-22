var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.
var ball_options={
	isStatic:false,
	restitucion:0.3,
	friction:0,
    density:1.2
}
ball=Bodies.circle(260,100,radius/2,ball_options);
 World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



