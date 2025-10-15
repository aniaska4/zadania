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