//creating the bob class
class Bob{
    
    //creating the constructor
    constructor(x,y){
        var options = {
            restitution: 0.8,
            friction: 0.3,
            density: 1
            }
            this.body = Bodies.circle(x,y,25,options);
            World.add(myWorld, this.body);

    }
    
    //displaying the bob
    display(){
        fill("pink");
        ellipseMode(CENTER);
         ellipse(this.body.position.x, this.body.position.y, 50,50);
    }
}