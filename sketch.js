const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    //platform = new Ground(150, 305, 300, 170);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
    
    //level two
    block8 = new Block(390,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);

    //level three
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
 
    //top
    block16 = new Block(390,155,30,40);







}

function draw(){
    Engine.update(engine);
    
    ground.display();

    //platform.display();
    //log6.display();
    slingshot.display();  
}  

    function mouseDragged(){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
    
    
    function mouseReleased(){
        slingshot.fly();
    }

