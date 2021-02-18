const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundIMG;
var hero;
var sling;
var monster;

function preload() {
//preload the images here
backgroundIMG = loadImage("images/GamingBackground.png")

}

function setup() {
  createCanvas(1600, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
  ground = new Ground(800, 600, 1600, 10);
  

  hero = new Hero(400, 300, 200, 300);

  monster = new Monster(1500, 100, 300, 200);

  sling = new Fly(hero.body, { x: 500, y: 50});

  box1 = new Box(1000, 100, 70, 70);
  box2 = new Box(1000, 100, 70, 70);
  box3 = new Box(1000, 100, 70, 70);
  box4 = new Box(1000, 100, 70, 70);
  box5 = new Box(1000, 100, 70, 70);
  box6 = new Box(1000, 100, 70, 70);
  box7 = new Box(900, 100, 70, 70);
  box8 = new Box(900, 100, 70, 70);
  box9 = new Box(900, 100, 70, 70);
  box10 = new Box(900, 100, 70, 70);
  box11 = new Box(900, 100, 70, 70);
  box12 = new Box(900, 100, 70, 70);
  box13 = new Box(800, 100, 70, 70);
  box14 = new Box(800, 100, 70, 70);
  box15 = new Box(800, 100, 70, 70);
  box16 = new Box(800, 100, 70, 70);
  box17 = new Box(800, 100, 70, 70);
  box18 = new Box(800, 100, 70, 70);
  box19 = new Box(800, 100, 70, 70);
  box20 = new Box(800, 100, 70, 70);

}

function draw() {
  background(backgroundIMG);
  Engine.update(engine);
  ground.display();
  hero.display();
  sling.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()

  monster.display()

}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}
