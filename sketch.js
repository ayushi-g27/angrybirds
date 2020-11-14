const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4, box5;
var pig, pig2;
var log, log1, log2, log3;
var bird;

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;


    bird = new Bird(100, 150);
    
    box1 = new Box(700,390,50,50);
    box2 = new Box(850,390,50,50);
    log = new Log(770,335, 230,PI/2);

    pig = new Pig(775, 335);

    box3 = new Box(700,320,50,50);
    box4 = new Box(850,320, 50,50);

    pig2 = new Pig(775, 300);

    log1 = new Log(770, 290, 230,PI/2);
    
    ground = new Ground(500,height,1000,20)

    box5 = new Box(770, 250, 50,50);

    //log2 = new Log(700,250, 100, PI/7);

   
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig.display();
    pig2.display();
    log.display();
    log1.display();
    log2.display();
    log3.display();
    bird.display();
}