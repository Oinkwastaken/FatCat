
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
var bedroom
var garden
var bathroom
function preload()
{
  happycat=loadImage("images/happycat.png")
  madcat=loadImage("images/angry cat.png")
  fatcat=loadImage("images/fatcat.png")
  bedroom=loadImage("images/bedroom.jpg")
  garden=loadImage("images/garden.jpg")
  bathroom=loadImage("images/bathroom.jpg")
  
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database()
  back1 = createSprite(250,250,50,50)
  back1.addImage("bed",bedroom)
  back1.visible=false
  back2 = createSprite(250,250,50,50)
  back2.addImage("garden",garden)
  back2.visible=false
  back3 = createSprite(250,250,50,50)
  back3.addImage("bath",bathroom)
  back3.visible=false
  pet1 = createSprite(250,250,50,50)
  pet1.addImage("mad",madcat)
  pet1.visible=false
  pet2 = createSprite(250,250,50,50)
  pet2.addImage("happy",happycat)
  pet2.visible=false
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
   back2.visible=true
    back3.visible=false
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
    back1.visible=true
    back2.visible=false
    pet1.visible=true
    pet2.visible=false
    
  }
  if(a>5){
    
    back3.visible=true
    back2.visible=false
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
