class DustBin {
    constructor(x,y,width,height){
  var options = {
      isStatic: false,
  }
 
    this.body = Bodies.rectangle(x,y,height,options);
    World.add(world,this.bodyb);
    this.body = Bodies.rectangle((x-(width/2)),(y-(height*2)),height,options);
    World.add(world,this.body1);
    this.body = Bodies.rectangle((x-(width/2)),(y-(height*2)),height,options);
    World.add(world,this.bodyr);
    this.bodyb.width= width 
    this.bodyb.height= height
    }
     display() {
    fill ("white");
    rect(this.bodyb.position.x,this.bodyb.position.y,this.bodyb.width,this.body.height);
    rect((this.bodyb.position.x-(this.bodyb.width/2)), (this.bodyb.position.y));
    rect((this.bodyb.position.x+(this.bodyb.width/2)), (this.bodyb.position.x));
     }
}


     


