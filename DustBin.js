class DustBin {
    constructor(x, y,width,height) {
      var options = {
         isStatic:true,
          'density':1.0
      }
      this.image=loadImage("dustbin.png")
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
     // rotate(angle);
      imageMode(CENTER);
      strokeWeight(4)
      stroke("green")
      fill("brown");
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };