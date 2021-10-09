var x = 7;
function getName(){
  console.log("Namaste JavaScript");
}

getName();
console.log(x);

// Output:
// Namaste JavaScript
// 7

getName();
console.log(x);

var x = 7;
function getName(){
  console.log("Namaste JavaScript");
}

// Output:
// Namaste JavaScript
// undefined

getName();
console.log(x);

function getName(){
  console.log("Namaste JavaScript");
}

// Output:
// Namaste JavaScript
// x is not defined
