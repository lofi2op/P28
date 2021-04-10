class Launcher {
    constructor(bodyA, ppointB) {
        var options = {
            bodyA: bodyA,
            pointB: ppointB,
            stiffness: 0.04,
            length: 10
        }

        this.pointB = ppointB;
        this.Launcher = Constraint.create(options);
        World.add(world, this.Launcher);
    }


    fly(){
        this.Launcher.bodyA = null
    }



    display() {
        if (this.Launcher.bodyA) {
            var pointA = this.Launcher.bodyA.position;
            var vpointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, vpointB.x, vpointB.y);
        }
    }

}