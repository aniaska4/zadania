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

console.log(capitalize('pomarancza'));

capitalize('pomarancza')