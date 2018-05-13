class Pitch {
  constructor() {
    this.x = 0;
    this.y = 0;
  }

  show(){
    noFill();
    stroke(255);
    strokeWeight(2);
    rectMode(CENTER);

    ellipse(0,0,200);
    ellipse(0,0,4);

    line(0,-height/2,0,height/2);

    rect(20 -width/2,0,75 ,150);
    rect(width/2 - 20 ,0,75 ,150);
    //rect(x,y,w,h,[detailX],[detailY])

  }
}
