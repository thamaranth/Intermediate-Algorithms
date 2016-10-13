/* Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined. */

function fearNotLetter(str) {
var previous;
var current;
var missing;

for (var i = 0; i < str.length; i++) {

current = str.charCodeAt(i);

if (i > 0) {
  current = str.charCodeAt(i);

  if (current - previous !== 1) {
    missing = current - 1;
    missing = String.fromCharCode(missing);
  }
}

previous = current;

}

return missing;
}

fearNotLetter("abce");
