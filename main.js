let points = [
    40, 
    100, 
    1, 
    5,
    25,
    10
];

var sum = points.reduce(myFunction);

document.getElementById("demo").innerHTML = "The sum is " + sum;

function myFunction(total, value, index, array) {
  return total + value;
}
console.log(sum);



document.getElementById("demo").innerHTML = myArrayMin(points);
function myArrayMin(arr) {
    let len = arr.length;
    let min = Infinity;
    while (len--) {
      if (arr[len] < min) {
        min = arr[len];
      }
    }
    return min;
  }
  console.log(myArrayMin(points));


document.getElementById("demo").innerHTML = myArrayMax(points);
function myArrayMax(arr) {
    let len = arr.length;
    let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}
console.log(myArrayMax(points));

function plus () {
  let num1, num2, res;
  num1 = document.getElementById("number1").value;
  num1 = parseInt(num1);

  num2 = document.getElementById("number2").value;
  num2 = parseInt(num2);
  res = num1 + num2;
  document.getElementById("out").innerHTML = res;
}


function minus () {
  let num1, num2, res;
  num1 = document.getElementById("number1").value;
  num1 = parseInt(num1);

  num2 = document.getElementById("number2").value;
  num2 = parseInt(num2);
  res = num1 - num2;
  document.getElementById("out").innerHTML = res;

}