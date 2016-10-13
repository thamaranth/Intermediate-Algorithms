/* DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array. */

function pairElement(str) {
  var newArray = [];


 for ( var i = 0; i < str.length; i++) {
   switch (str[i]) {
     case "A": newArray.push([str[i], "T"]);
       break;
     case "T": newArray.push([str[i], "A"]);
       break;
     case "C": newArray.push([str[i], "G"]);
       break;
     case "G": newArray.push([str[i], "C"]);
     break;
   }

 }

  return newArray;
}

pairElement("GCG");
