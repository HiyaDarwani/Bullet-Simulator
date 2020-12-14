var wall, bullet;
var thickness, speed, weight;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(223, 321);
  bullet = createSprite(50, 200, 100, 10);
  bullet,shapeColor = ("white");
  wall = createSprite(1200,200, thickness,height /2);
  wall.shapeColor = (80, 80, 80);
  bullet.velocityX = speed;
  thickness = random(22,83)
}

function draw() {
  background("black");  
  drawSprites();
  if (hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness)

    if (damage>10){
      wall.shapeColor=color("green");
    }
    if (damage<10){
      wall.shapeColor =color("red");
    }

  }

function hasCollided(Lbullet, Lwall){
  bulletRightEdge = Lbullet.x +Lbullet.width;
  wallLeftEdge =Lwall.x;
  if (bulletRightEdge >= wallLeftEdge){
    return true
  }
   return false
 }
}