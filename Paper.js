class Paper{
    constructor(x, y, radius ) {
        var options = {
           // 'isStatic' : false,
            'restitution':0.8,
            'friction':0.5,
            'density':1

        }
        this.body = Bodies.circle(x, y, radius);
        this.radius = radius;
        
        
        World.add(world, this.body);
      }
      display(){
        
        
        var pos =this.body.position;
     push();
     translate( pos.x, pos.y)
     ellipseMode(RADIUS)
      ellipse(0, 0, this.width, this.height);
        
        pop();
      }
}