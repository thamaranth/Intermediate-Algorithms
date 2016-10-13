
/* Boo who
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false. */

function booWho(bool) {

if (isNaN(bool)) {
  return false;
}
if (typeof(bool) === "boolean") {
  return true;
}

return !bool;
}

booWho(false);
