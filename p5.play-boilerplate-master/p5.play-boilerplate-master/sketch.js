const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object;

function setup() {
  var canvas= createCanvas(400,400);

  engine = Engine.create();
  world = Engine.World();
  object = Bodies.rect(200,200,50,50);
  World.add(world,object);
 
}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  rectMode(CENTER);
  rect(object.positionx,50,50);
  rect(object.positiony,50,50);
}
