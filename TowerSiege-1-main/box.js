class box {
    constructor(x, y, width, height) {
      
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic' : false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibilty = 255;
        World.add(world, this.body);
      }
      display(){
        
        if(this.body.speed < 3){
          var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rect( 0, 0, this.width, this.height);
        pop();
         }
         else{
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
          tint(255,this.Visiblity);
          pop();
         }

     console.log(this.body.speed)
      }
  
    }