class food{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.width = width;
        this.height = height;
        this.image = loadImage("images/Milk.png");
      }
      display(){
        push();
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }

    getFoodStock(){
  
    }
    updateFoodStock(){
  
    }
    deductFoodStock(){
  
    }
}