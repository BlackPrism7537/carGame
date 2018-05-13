class Ball {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.d = 26
    this.r = this.d/2;
    this.angle = 0;
    this.speed = 0;
    this.dir = {x:0, y:0}
  }

  show(){
    fill(255);
    ellipse(this.x, this.y, this.d);
  }

  move(){
    this.x += this.dir.x*this.speed;
    if (this.x - this.r < -width/2){
      this.x = (-width/2 + this.r) + 1
      this.dir.x = -this.dir.x;
    }else if (this.x + this.r > width/2) {
      this.x = (width/2 - this.r) - 1
      this.dir.x = -this.dir.x;
    }

    this.y += this.dir.y*this.speed;
    if (this.y - this.r < -height/2){
      this.y = (-height/2 + this.r) +1;
      this.dir.y = -this.dir.y;
    }else if (this.y + this.r > height/2) {
      this.y = (height/2 - this.r) -1
      this.dir.y = -this.dir.y;
    }
  }

  collision(player){
    let d = ((this.x - player.x)*(this.x - player.x))
          + ((this.y - player.y)*(this.y - player.y));

    let rd = (this.r + player.r/2)*(this.r + player.r/2);
    if (d < rd){
      this.angle = player.angle;
      this.speed = player.speed*1.2;

      this.dir.x = sin(this.angle)
      this.dir.y = sin(this.angle - PI/2)
    }
  }
}
