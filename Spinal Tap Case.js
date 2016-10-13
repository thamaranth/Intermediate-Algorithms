/* Instructions:
Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. */

function spinalCase(str) {


return str.replace(/(?!^)([A-Z])/g, '-$1').replace(/[\s_-]+/g, '-').toLowerCase();
}

spinalCase('This Is Spinal Tap');
