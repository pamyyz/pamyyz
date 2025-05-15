function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //rosto
  fill('white')
  circle(200, 200, 300);
  
  //olhos
  fill('black')
  circle(150, 150, 60);
  circle(250,150, 60);
  
  //olhos
  fill('rgb(255,0,0)')
  circle(150, 150, 10)
  circle(250,150, 10)
  
  
  //nariz
  fill('orange')
  triangle(202, 184, 15, 224, 242, 223);
  
  //boca
  fill('brown');
  line(120, 265, 290, 265);
  
  //cabelo
  fill('black')
   line(153, 69, 195, 7);
  line(157, 70, 250, 9);
  line(160, 75, 280, 9);
  
  if(mouseIsPressed){
      console.log(mouseX, mouseY);
    
  }
}