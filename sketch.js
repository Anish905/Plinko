var particles=[];
var plinkos=[];




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,wall1,wall2,roof;
var division1,division2,division3,division4,division5,division6;
var score = 0;

function setup() {
	createCanvas(500,800);
  engine = Engine.create();
	world = engine.world;

  ground = new Ground(300,height,1200,20);
  wall1 = new Ground(495,height,10,1600);
  wall2 = new Ground(5,height,10,1600);
  roof = new Ground(1000,5,2000,10);

  division1 = new Division(80,height,10,500)
  division2 = new Division(160,height,10,500);
  division3 = new Division(240,height,10,500);
  division4 = new Division(320,height,10,500);
  division5 = new Division(400,height,10,500);
  division6 = new Division(480,height,10,500);

  for (var j = 60; j <=width; j=j+45) 
  {
  
     plinkos.push(new Plinko(j,75));
  }

  for (var j = 60; j <=width-10; j=j+45) 
  {
  
     plinkos.push(new Plinko(j,175));
  }

   for (var j = 60; j <=width; j=j+45) 
  {
  
     plinkos.push(new Plinko(j,275));
  }

   for (var j = 60; j <=width-10; j=j+45) 
  {
  
     plinkos.push(new Plinko(j,375));
  }

}



function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground.display();
  wall1.display();
  wall2.display();
  roof.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    score++;
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  drawSprites();
 
}



