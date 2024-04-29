// split-----------



var text = 'My Name Is Vraj'
console.log(text.split(' '));  // ['My', 'Name', 'Is', 'Vraj']

var text = 'My Name Is Vraj'
console.log(text.split(''));  // ['M', 'y', ' ', 'N', 'a', 'm', 'e', ' ', 'I', 's', ' ', 'V', 'r', 'a', 'j']

var text = 'My Name Is Vraj'
const myArray = text.split(" ");
let word = myArray[3]
console.log(word);  //Vraj

console.log(text.split(" ", 2))  // ['My', 'Name']


//slice--------

var text = 'Bit Khanak'
console.log(text.slice(0,3));  //Bit

var text = 'Bit Khanak'
console.log(text.slice(2));  //t Khanak

