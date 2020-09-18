class Launcher{
    constructor(bodyA,pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 40 
        }
        this.pointB = pointB;
        this.bodyA = bodyA;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);

    }

    fly() {
        this.launcher.bodyA = null;
    }

    display(){
       var pointA = this.bodyA.position;
       var pointB = this.pointB;
       
       strokeWeight(10);
       fill(rgb(255,0,0));
       line(this.bodyA.x,this.bodyA.y,pointB.x,pointB.y);
    }
}