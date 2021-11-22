var bearImg,dogwalking,girlwalking,lionImg,gorillaImg
,porcupineImg,backgroundImg
var bg,girl,dog,lion,gorilla,porcupine

function preload() {

  bearImg = loadImage("bear.png")
  dogwalking= loadAnimation("d1.png","d1.png","d2.png","d2.png","d2.png","d3.png","d3.png","d3.png","d4.png","d4.png")
  girlwalking= loadAnimation("g1.png","g2.png","g3.png","g4.png")
  lionImg= loadImage("lion.png")
  gorillaImg= loadImage("gorilla.png")
  porcupineImg= loadImage("porcupine.png")
  backgroundImg= loadImage("background.png")

  girlwalking.loop = true
  dogwalking.loop =  true
}

function setup() {
  createCanvas(1200,600)

  bg = createSprite(490,200)
  bg.addImage(backgroundImg)
  bg.velocityX = -2
  bg.scale = 3
  

  girl = createSprite(300,450)
  girl.addAnimation("walk",girlwalking)
  girl.scale = 2

  dog = createSprite(180,480)
  dog.addAnimation("dogwalk",dogwalking)
  dog.scale = 0.8
  
}

function draw() {
  background("grey")

  if(bg.x < 400){
    bg.x = bg.width/2
  }

  drawSprites()
}