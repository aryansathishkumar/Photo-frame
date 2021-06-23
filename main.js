function preload()
{

}
function setup()
{
    var canvas = createCanvas( 800, 400);
    video = createCapture(VIDEO);
    video.hide();
    canvas.center();
}

function draw()
{
    image(video, 250, 50, 300, 300);
    fill("orange")
    rect(0, 25, 50, 350);
    rect(750, 25, 50 ,350);
    rect(25,10,750,50);
    rect(25,350,800,50)
    fill("cyan");

    translate(50, 50);
    noStroke();
    for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
  }
  translate(15, 325);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
  }
  translate(675, 10);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
  }
  translate(-10, -350);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
  }
}
function take_snapshot()
{
    save("selfie.jpeg")
}