class Mango
{
    constructor(x,y,radius)
    {
        var options = 
        {
            density: 1.2,
            isStatic: true,
            restitution: 0.5
        }
        this.image = loadImage("mango.png");
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rotate(angle);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius*2,this.radius*2);
        pop();
    }
}