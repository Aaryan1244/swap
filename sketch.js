

var a = prompt('Enter the first variable: ');
var b= prompt('Enter the second Value');

function setup(){
  var b2 = createButton("click here to Swap");
  b2.mousePressed(swap);

  console.log("a before swapping:"+a);
  console.log("b before swapping"+b);

  }


function draw()
{
  
}

function swap(){
  [a,b]=[b,a];
  console.log("a after swapping:"+a);
  console.log("b after swapping"+b);
}
