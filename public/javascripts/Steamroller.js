/* Introduction:
Steamroller

Flatten a nested array. You must account for varying levels of nesting. */

function steamrollArray(arr) {
  var newArr = [];

  function flattenArray(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flattenArray(arr[i]);
      } else {
        newArr.push(arr[i]);
      }
    }
  }

  flattenArray(arr);
  return newArr;
}


steamrollArray([1, [2], [3, [[4]]]]);
