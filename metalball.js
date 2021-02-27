class Ball{
 constructor(x,y,radius){
     var options = {
        'restitution':1.4,
        'friction':1.0,
        'density':1.0,
        'isStatic':false
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.body.position.x = x;
        this.body.position.y = y;
         World.add(world, this.body);
 }  
    display(){
        var pos =this.body.position;

      ellipseMode(CENTER);
      fill("white");
      ellipse(pos.x, pos.y, this.radius*2);
      }
}