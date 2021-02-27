const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, plr, string;
var obj1, high, swing, val;

engine: engine;

function preload(){
    swing = loadSound("BatSwing.mp3");
    field = loadImage("grass.jpeg");
}

function setup(){
  createCanvas(600,600);
    engine = Engine.create();
    world = engine.world
    ball = new Ball(300,200,30)
    plr = new Ball(300,500,30)
    obj1 = new Ball(300,-100,20)
    plr.body.isStatic = true
    string = new Slingshot(ball.body,plr.body)
    high = 0
    textSize(30);
    textFont("Verdana");
    val = 30
}

function draw(){
    background(field);
    Engine.update(engine);
    ball.display();
    plr.display();
    obj1.display();
    Matter.Body.setPosition(plr.body,{x:mouseX,y:450});
    var1 = Math.round(obj1.body.speed)
    text("ball's speed: " + Math.round(obj1.body.speed) + " pixels per frame", 0, 25);
    text("best speed: " + high + " pixels per frame",0,50);
    text("arm length: " + string.sling.length,0,575)
    if (val > 30){
    text("swing speed: " + Math.round(val) + " pixels per frame",0,75)
    }
    if (Math.round(obj1.body.speed) > high){
        high = Math.round(obj1.body.speed);
    }
    if((obj1.body.speed) > val){
     swing.play();
     val = (obj1.body.speed)
    }
    if(obj1.body.position.y > 650){
        obj1.body.isStatic = true   
    }
}

function keyPressed(){
    if(keyCode == 82){
      obj1 = new Ball(300,-100,20)
      val = 30
    }
    if(keyCode == 69 && string.sling.length < 180){
      string.sling.length =  string.sling.length + 5  
    }
    if(keyCode == 81 && string.sling.length > 80){
      string.sling.length =  string.sling.length - 5  
    }
}