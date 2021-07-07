class SlingShot {
   constructor(bodyA,bodyB)
   {
       var options = {
           bodyA:bodyA,
           bodyB:bodyB,
           stiffness:0.04,
           length:10,
       }
       this.sling = Constraint.create(options);
       World.add(world,this.sling);

   }
   display()
       {
         var p1 = this.sling.bodyA.position;
         var p2 = this.sling.bodyB.position;
         strokeWeight(4);
         line(p1.x,p1.y,p2.x,p2.y)
       }
   
}