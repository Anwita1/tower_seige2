const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon_img;

function preload(){
    polygon_img = loadImage ("polygon.png")
}

function setup(){
    
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    polygon = Bodies.circle(50,200,20)
    World.add(world,polygon);


    slingShot = new SlingShot(this.polygon,{x:100,y:200});

    ground1 = new Ground(400,300,400,10);
    ground2 = new Ground(1000,250,400,10);

    box1 = new box(400,70,30,40);
    box2 = new box(370,70,30,40);
    box3 = new box(340,70,30,40);
    box4 = new box(310,70,30,40);
    box5 = new box(430,70,30,40);
    box6 = new box(460,70,30,40);
    box7 = new box(490,70,30,40);

    box8 = new box(400,110,30,40);
    box9 = new box(370,110,30,40);
    box10 = new box(340,110,30,40);
    box11 = new box(430,110,30,40);
    box12 = new box(460,110,30,40);

    box13 = new box(1000,30,30,40);
    box14 = new box(1030,30,30,40);
    box15 = new box(1060,30,30,40);
    box16 = new box(970,30,30,40);
    box17 = new box(940,30,30,40);

    box18 = new box(1000,60,30,40);
    box19 = new box(1030,60,30,40);
    box20 = new box(970,60,30,40);
}

function draw(){
    background("white");
    Engine.update(engine);
    ground1.display();
    ground2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    slingShot.display();

    imageMode(CENTER)
    image(polygon_img , polygon.position.x,polygon.position.y,40,40);
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}