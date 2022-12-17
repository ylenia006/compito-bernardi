let x = 0
let y = 0
let d = 20

let dimensioneInput = document.querySelector("[name=dimensione]")

    dimensioneInput.addEventListener("input", function(e){
      console.log(`dimensione changed -> ${dimensioneInput.value}`)
      d = parseInt(dimensioneInput.value)
      background("black") 
      x = 0 
      y = 0 
    })


function setup() 
{
  createCanvas(400, 400)
  background("black")
}

function draw() 
{

  if (random(1) > 0.5) 
  {
    stroke("white")
    line(x, y, x+d, y+d)
  } 
  else 
  {
    stroke("white")
    line(x, y+d, x+d, y)
  }

  x += d

  if (x > width) 
  {
    x = 0;
    y += d;
  }

  if (y > height) 
  {
    background("black")
    x = 0
    y = 0
  }
}