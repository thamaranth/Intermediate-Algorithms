/* Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
The lowest number will not always come first. */

function sumAll(arr) {
var list = [];
var max = Math.max(arr[0], arr[1]);
var min = Math.min(arr[0], arr[1]);

for (var index = min; index <= max; index++) {
  list.push(index);
}

var total = list.reduce( function (a,b) { return a + b;

});

return total;
}

sumAll([1, 4]);
