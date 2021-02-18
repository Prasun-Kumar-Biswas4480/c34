class Monster{
    constructor(x,y,height, width,angle){
        var options = {
            isStatic: true
        }

        //this.x = x;
        //this.y = y;
        //this.r = r;
        this.image = loadImage("images/Monster-01.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);



    }
    display(){
        var angle = this.body.angle;
        
        var pos = this.body.position;
          push ()
          translate(pos.x,pos.y);
          rotate (angle)
          fill ("red");
  
          imageMode(CENTER);
          image(this.image,0,0, this.width, this.height)
          pop ()

    }
}