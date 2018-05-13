let players = [];

function setup() {
  createCanvas(800,400);
  for (var i = 0; i < 2; i++) {
    players[i] = new Player(-100+i*200, 0, i)
  }
  ball = new Ball();
  pitch = new Pitch();
}

function draw() {
  translate(width/2,height/2)

  checkGoal();
  background(0, 252, 12);
  pitch.show();
  displayScores();

  controlsP1();
  controlsP2();

  for (var i = 0; i < players.length; i++) {
    players[i].show();
    ball.collision(players[i]);
  }
  ball.move();
  ball.show();

}


function controlsP1(){
  let r = 0;

  if (keyIsDown(65)) {
    r --;
  }
  if (keyIsDown(68)) {
    r ++;
  }
  players[0].turn(r)

  if (keyIsDown(87)) {
    players[0].forward()
  }
}


function controlsP2(){
  let r = 0;

  if (keyIsDown(LEFT_ARROW)) {
    r --;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    r ++;
  }
  players[1].turn(r)

  if (keyIsDown(UP_ARROW)) {
    players[1].forward()
  }
}


function checkGoal(){
  if (ball.y > -75 && ball.y < 75){
    if (ball.x < 15 -width/2){
      print("blue")
      goal(1)

    }else if (ball.x > width/2 - 15) {
      print("red")
      goal(0)
    }
  }
}

function goal(side) {
  players[side].score ++;
  ball = new Ball();
  for (var i = 0; i < players.length; i++) {
    players[i].resetPos()
  }
  if (players[side].score > 4){
    noLoop();
    textSize(36);
    fill(0);
    textAlign(CENTER);
    text("Player " + (side+1) + " Wins!", 0, -50);
    print(side);
  }
}

function displayScores(){
  textSize(36);
  textAlign(CENTER);
  fill(255,0,0);
  text(players[0].score, -50, 50 - height/2);
  fill(0,0,255);
  text(players[1].score, 50, 50 - height/2);

  let secs = 120 - millis()/1000;
  let mins = int(secs/60);
  secs = int(secs%60);
  if (mins < 10){
    mins = str("0"+mins);
  }
  if (120 - millis()/1000 < 10){
    secs = str("0"+secs);
  }

  if(secs < 0){
    noLoop()
    if(players[0] > players[1]){
      text("Player 1 Wins!", 0, -50)
    }else if (playrs[0] < players[1]){
      text("Player 2 Wins!", 0, -50)
    }else{
      text("Draw!", 0, -50)
    }
  }

  text(mins + ":" + secs, 0, height/2 - 20);
}
