//calculating area of square
function calcSquareArea(a,b) {
let areaSq = a * b;
return areaSq;
}

//calculating area of circle
function calcCircleArea(radius) {
  let areaCr = (radius * radius * Math.PI);
  return areaCr;
}

//explicit assert equal function
function assertEqual(val1,val2,errorMsg) {

    if (val1 === val2) {
      console.log("TRUE");
    } else {
      console.log(errorMsg);
    }
}
console.log("\nThe area of square is " + calcSquareArea(40,50) + ".");
console.log("The area of circle is " + calcCircleArea(2));

//console.assert(calcCircleArea(2) / (2 * 2 * Math.PI) == 1, "is not an valid Circle area");
//console.assert(calcSquareArea(40,50) / (40 * 50) == 1, "is not an valid Square area");

console.log(assertEqual(calcCircleArea(2) , (2 * 2 * Math.PI)));
console.log(assertEqual(5 , 5));
console.log(assertEqual(5 , 5));
console.log(assertEqual(5<6, 5<6));
console.log(assertEqual(5<6, 5<6, "NOT VALID"));


