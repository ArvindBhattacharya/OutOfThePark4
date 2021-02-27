class Slingshot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 1,
            length: 80,
            damping: 0
        }
        this.bodyA = bodyA;
        this.bodyB = bodyB;
        this.sling = Constraint.create(options);
        Matter.World.add(world, this.sling);
    }
}