let w = 400
let x = 0
let y = 0
let l = 40

function setup() {
  createCanvas(400, 400);
  background("black");
}

function draw() {
  
  let r = random()
  
  if(r>0.5)
  {
    noStroke()
    fill("white")
    square(x,y,l)
    fill("black")
    circle(x+l/2, y+l/2,l/2)
  } 
  else
  {
    noStroke()
    fill("black")
    square(x,y,l)
    fill("white")
    circle(x+l/2, y+l/2,l/2)
  }
  x=x+l
  
  if(x>w)
  {
    x=0
    y=y+l
  }
}