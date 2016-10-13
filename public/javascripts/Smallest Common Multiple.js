/* Instructions:
Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3. */

function smallestCommons(arr) {
  var begin = arr[0] < arr [1] ? arr[0]: arr [1];
  var end = arr[1] < arr[0] ? arr[0]: arr[1];
  var multiplier = 1;
  var newArr = [];
  var num;
  var j;

  for (var i = end; i >= begin; i--) {
    newArr.push(i);
  }
  console.log(newArr);

  do {
     num = newArr[0] * newArr[1] * multiplier;
    for (j = 2; j < newArr.length; j++) {
      if (num % newArr[j] !==0) {
        break;
      }
    }
     multiplier ++;
  } while (j !== newArr.length);

  return num;
}
