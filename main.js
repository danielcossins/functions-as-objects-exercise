/*
  Create a function that multiplies two numbers
  passed in as argument. Return the product.
 */
function multiply(a, b){
  return a*b;
}

/*
  Create a function that divides two numbers
  passed in as argument. Return the quotient.
 */
function divide(a, b){
  return a/b;
}

/*
  Create a variable to hold the return value of the
  3-argument function. 

  e.g. var result = myFunction(0, 0, func)
 */

var result = function(a, b, func){
  return func(a, b);
}

/*
  Log the result
 */
console.log(result(12, 43, multiply));
console.log(result(24, 4, divide));