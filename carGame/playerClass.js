class Player {
  constructor(x, y, p) {
    this.x = x;
    this.resetX = x;
    this.y = y;
    this.resetY = y;
    this.p = p
    this.d = 26
    this.r = this.d/2;
    this.angle = PI/2 + p*PI;
    this.speed = 3;
    this.score = 0;
  }

  show(){

    noStroke();
    if (this.p == 0){
      fill(255,0,0);
    }else {
      fill(0,0,255);
    }

    rectMode(CENTER);

    push()
    translate(this.x,this.y)
    rotate(this.angle);
    rect(0,0,this.d,this.d)
    fill(0)
    rect(this.r, this.r - 4, 4, 8, 2, 2);
    rect(-this.r, this.r - 4, 4, 8, 2, 2);
    rect(this.r, -this.r + 4, 4, 8, 2, 2);
    rect(-this.r, -this.r + 4, 4, 8, 2, 2);
    pop()


  }

  turn(dir){
    this.angle = (this.angle + dir*PI/24)%TWO_PI;
    if (this.angle < 0){
      this.angle += TWO_PI;
    }
  }

  forward(){
    this.x += sin(this.angle)*this.speed;
    if (this.x - this.r < -width/2){
      this.x = this.r - width/2;
    }else if (this.x + this.r > width/2) {
      this.x = width/2 - this.r;
    }
    this.y += sin(this.angle - PI/2)*this.speed;
    if (this.y - this.r < -height/2){
      this.y = this.r - height/2;
    }else if (this.y + this.r > height/2) {
      this.y = height/2 - this.r;
    }
  }

  resetPos(){
    this.x = this.resetX;
    this.y = this.resetY;
    this.angle = PI/2 + this.p*PI;
  }
}
