function reverseString(str) { // słońce => ecńołs
  return str.split('').reverse().join('')
}

function countChar(str, char) {// => banana, a
  console.log(str.split('').filter(el => el === char).length);

  return str.split('').filter(el => el === char).length
}

countChar('samochód', 'm');

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log('capitalize', capitalize('pomarancza'));

capitalize('pomarancza')

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

console.log('isPalindrome', isPalindrome('kajak'));
console.log('isPalindrome', isPalindrome('pomarancza'));

function mergeArrays(arr1, arr2) {
  console.log(arr1.concat(arr2));
}

mergeArrays([1, 2, 3, 4], [11, 21, 31, 41] );

function filterEven(arr) {
  // arr.filter(numb => numb % 2 !== 0) 
  return arr.filter(numb => numb % 2 === 0)
}

console.log('filterEven', filterEven([1, 2, 3, 4, 11, 21, 31, 41]));

function stringToWords(str) {
  return str.split(' ');
}

console.log('stringToWords', stringToWords('To jest test'));

function contains(arr, el) {
  return arr.includes(el);
}

console.log('contains', contains([1, 2, 3], 5));

function removeElement(arr, el) {
  return arr.filter(element => element !== el)
}

console.log('removeElement', removeElement([1, 2, 3, 2], 2));

console.log(Math.max(...[1, 2, 3, 2, 4 , 20]));

function arrayToString(arr){
  return arr.join(' ');
}

console.log('arrayToString', arrayToString(["Hello", "world"] ));

function toUpperCaseArray(arr){
  return arr.split('').toUpperCase().join('')
}

toUpperCaseArray(["a", "b", "c"]);

function wordLengths(arr) {
  return arr.map(el => el.length)
}

console.log('wordLengths', wordLengths(["kot", "pies"]))

function reverseArray(arr) {
  return arr.reverse();
}

console.log('reverseArray', reverseArray([1, 2, 3]))

function filterStrings(arr) {
  return arr.filter(el => typeof el === 'string')
}

console.log('filterStrings', filterStrings([1, "kot", true, "pies"]))

function prefixStrings(arr, prefix) {
  return arr.map(el => `${prefix}${el}`)
}


console.log('prefixStrings', prefixStrings(["dom", "auto"], 'super-'));

function sumArray(arr) {
  arr.reduce((total, el) => total + el, 0)
}

[1, 2, 3] 

//stan początkowy: 0

// 1 iteracja total 0 + 1 => 1
// 2 iteracja total 1 + 2 => 3
// 3 iteracja total 3 + 3 => 6