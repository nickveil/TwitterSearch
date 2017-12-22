
void setup(){
  size(640,360);
  background(51);
  float tot = random(500,10000);
  for (int i =0; i<tot; i++) {
    float x = random(width);
    float y = random(height);
    float r = random(0,25);
    float b = random(100,255);
    noStroke();
    fill(r,190,b,100);
    ellipse (x,y,16,16);
  }
  save("output.png");
  exit();
}