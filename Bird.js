class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory = [];

   // this.trajectory = [[100,50],[200,30],[300,200]];
// [0][0], [1][0], [2][0]
// [0][1], [1][1], [2][1]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.position.x>10 && this.body.position.y>200){
    var position = [this.body.position.x,this.body.position.y];
    this.trajectory.push(position);

    for(var i = 0; i<this.trajectory.length; i++){
image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
  }
}
