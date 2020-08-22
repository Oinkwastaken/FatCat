
var happycat
var madcat
var fatcat
var database
var food1
var foodstock
var foodStock
var lastFed
var pet1
var pet2
var pet3
var foodS=0
var a=0
var milk
var button1
var button
var milkImg
function preload()
{
  happycat=loadImage("images/happycat.png")
  madcat=loadImage("images/angry cat.png")
  fatcat=loadImage("images/fatcat.png")
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database()
  pet1 = createSprite(250,250,50,50)
  pet1.addImage("mad",madcat)
  pet2 = createSprite(250,250,50,50)
  pet2.addImage("happy",happycat)
  pet3 = createSprite(250,250,50,50)
  pet3.addImage("fat",fatcat)
  pet3.visible=false
  milk = new food(100,500,10,10)
  foodstock=database.ref("Food")
  foodstock.on("value",readStock)
}


function draw() {  
  background(255,255,255)
  button1 = createButton("add food")
  button1.position(200,100)
  button = createButton("feed food")
  button.position(200,200)
  textSize(20)
  text("press the up arrow to feed",100,50)
  text("Don't make him to fat though",100,75)
  if(a<5){
    pet2.visible=true
    pet3.visible=false
   
  }
button.mousePressed(function(){
  console.log(a)
  if(foodS>0){
    a++
    writeStock(foodS)
  }
  })
  button1.mousePressed(function(){
    writeStockup(foodS)
    console.log(a)
    })
  if(a<0){
    pet1.visible=true
    pet2.visible=false
   
  }
  if(a>5){
    pet3.visible=true
    pet2.visible=false
   
  }
  text("you have "+ foodS+ " food left",100,100)
  
  
  drawSprites();
  a=a-0.01
}
  
function readStock(data){
  foodS=data.val()
}
function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}

function writeStockup(x){
    x=x+10
  
  database.ref('/').update({
    Food:x
  })
}
