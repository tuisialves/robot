function setup() {
  createCanvas(720,480);

  strokeWeight(2); 
}

function draw() {
  //feet
  noStroke();
  fill(90)
  ellipse(350,420,80,80);
  
  //Neck
  fill(200);
  line(width/2,height/2,width/2,height/2+60);
  line(width/2+10,height/2,width/2+10,height/2+60);
  line(width/2+20,height/2,width/2+20,height/2+60);
  
  //antennas
  stroke(100);
  line(width/2+38,195,width/2+38+40,210);
  line(width/2+10,height/2-50,400,80);
  line(width/2+10,height/2-50,330,150);

  //head
  noStroke();
  fill(0);
  ellipse(width/2+10,height/2-50,100,100);
  
  noStroke();
  fill(255);
  ellipse(width/2+20,180,35,35);
  
  noStroke();
  fill(200);
  ellipse(width/2+20,180,5,5);

  noStroke();
  fill(90);
  ellipse(width/2-10,180,12,12);
  ellipse(width/2+38,195,6,6);
  ellipse(width/2+28,157,8,8);


  //body
  noStroke();
  fill(0);
  rect(300,300,100,130);
  
  fill(90);
  rect(300,320,100,8);
  
 

  
  
}