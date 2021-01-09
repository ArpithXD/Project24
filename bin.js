class Bin {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
                }
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.binImage = loadImage("dustbin.png");
       this.width = width;
       this.height = height;
       World.add(world,this.body);
    }
    display(){
     var pos =this.body.position;
     imageMode(CENTER);
     fill("green");
     image(this.binImage,pos.x, pos.y, this.width, this.height);
   }
 }