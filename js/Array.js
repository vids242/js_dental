// let roll_no = [45, 2, 37, 8, 91, 10];

// console.log(roll_no);

// console.log(roll_no[2]);    //37

// let roll_no = new Array (45, 2, 37, 8, 91, 10);
// console.log(roll_no[3]);   //8

// let roll_no = [45, 2, 37, 8, 91, 10];
// console.log(roll_no);
// console.log(typeof roll_no);   // object

// let arr = ['vraj', 21, 96.5, 'surat'];
// console.log(arr);

// let arr = ['vraj', 21, 96.5, 'surat'];
// console.log(arr.length);    //4  &  index = 3

// let arr = ['vraj', 21, 96.5, 'surat'];

// arr.push(99);      //['vraj', 21, 96.5, 'surat', 99];

//arr.pop();   //['vraj', 21, 96.5];

//arr.unshift(99);   //[99, 'vraj', 21, 96.5, 'surat'];

//arr.shift();   //[21, 96.5, 'surat'];

//arr[1] = 99 //['vraj', 99, 96.5, 'surat'];

//arr.splice(2, 0, 99, 100)  // ['vraj', 21, 99, 100, 96.5, 'surat'];

// arr.splice(1,2);  //['vraj', 'surat'];

// console.log(arr);




//let arr = ['vraj', 21, 96.5, 'surat'];
//let arr1 = [99, 100];


//console.log(Array.isArray(arr));       //true

// let ans = arr.concat(arr1);
// console.log(ans);         // return array & ['vraj', 21, 96.5, 'surat', 99, 100]

//let ans = arr.some((a) => a === 'surat');  // true & return boolean
// let ans = arr.some(function(a) {
//     if (a === 'surat2') {
//         return true
//     } else {                   // flase
//         return false
//     }
// })

//console.log(ans);

//console.log(arr.toString());   // return string & vraj,21,96.5,surat

// let ans = arr.find((a)=>a==='surat');  // surat & return first occurance of value

// console.log(ans);


//let roll_no = [45, 2, 37, 8, 91, 10];

// iteration

// for (let i=0; i<roll_no.length; i++) {
//     console.log(roll_no[i]);
// }

// roll_no.forEach((v, i) => {
//     console.log(i, v);
// })

// roll_no.map((v, i) => {
//     console.log(i, v);
// })

//roll_no.map((v, i) => console.log(i, v));

// function display() {
//     console.log("hello");
// }

// display();

// arrow function

// const display = ((a, b) => {
//     console.log("Hello", a, b);
// })

// const display = (a, b) => console.log("hello", a, b);

// display(10, 20)

// let roll_no = [45, 2, 37, 8, 91, 10];

// let FData = roll_no.filter((v, i) => v > 25 && v < 50);
// console.log(FData);      //[45, 37] & return array

// let ans = roll_no.reduce((accumlator, v, i) => accumlator + v, 0);
// console.log(ans);     //193 


// let greating = "How are you?"
// let ans = greating.split(" ");
// console.log(ans);   //['How', 'are', 'you?']

// let ans = roll_no.slice(1, 3);
// console.log(ans);   //[2, 37] & return array

// let ans = roll_no.indexOf(37);
// console.log(ans);  //2 & return index of first occuerance of element;

// let ans = roll_no.every((age) => age > 1);
// console.log(ans); //true & return bollean

// let ans = roll_no.includes(5);
// console.log(ans);  // false & cheack specifice value return boolean





// 1) split()

// var text = 'My Name Is Vraj'
// console.log(text.split(' '));  // ['My', 'Name', 'Is', 'Vraj']

// var text = 'My Name Is Vraj'
// console.log(text.split(''));  // ['M', 'y', ' ', 'N', 'a', 'm', 'e', ' ', 'I', 's', ' ', 'V', 'r', 'a', 'j']

// var text = 'My Name Is Vraj'
// const myArray = text.split(" ");
// let word = myArray[3]
// console.log(word);  //Vraj

// console.log(text.split(" ", 2))  // ['My', 'Name']


// 2)  slice()

//  let text = "Hello world!";

 // let result = text.slice(0, 5);
// console.log(text.slice(0, 5));   //Hello

// let result = text.slice(3);
// console.log(text.slice(3));   //lo world!


// 3) map()

// const numbers = [4, 9, 16, 25];
// const newArr = numbers.map(Math.sqrt)
// console.log(numbers.map(Math.sqrt));  //[2, 3, 4, 5]

// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction)
// function myFunction(num) {
//     return num * 10;
// }
// console.log(numbers.map(myFunction));  // [650, 440, 120, 40]


// 4) Filter()

// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);
// function checkAdult(age) {
//   return age >= 18;
// }
// console.log(ages.filter(checkAdult));  //[32, 33, 40]


// 5) reduce()

// const numbers = [175, 50, 25];
// function myFunc(total, num) {
//   return total - num;
// }
// console.log(numbers.reduce(myFunc));  //100

// const numbers = [15.5, 2.3, 1.1, 4.7];
// function getSum(total, num) {
//   return total + Math.round(num);
// }
// console.log(numbers.reduce(getSum, 0));  //24  (23.6)


// 6)  indexOf()

// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("welcome");
// //console.log(text.indexOf("welcome"));  //13
// console.log(result); //`13

// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("Welcome");
// //console.log(result); //-1
// console.log(text.indexOf("Welcome")); //-1

// let text = "Hello world, welcome to the universe.";
// text.indexOf("e");
// console.log(text.indexOf("e")); //1

// let text = "Hello world, welcome to the universe.";
// text.indexOf("e", 5);
// console.log(text.indexOf("e", 5));  //14

// let text = "Hello world, welcome to the universe.";
// text.indexOf("a");
// console.log(text.indexOf("a"));  //-1


// 7) instlndexOf() 

//let text = "Hello planet earth, you are a great planet.";
//let result = text.lastIndexOf("planet");
//console.log(result); //36
//console.log(text.lastIndexOf("planet")); //36

// let text = "Hello planet earth, you are a great planet.";
// let result = text.lastIndexOf("Planet");
// console.log(result);  //-1


// 8) every()

// const ages = [32, 33, 16, 40];
// ages.every(checkAge)
// function checkAge(age) {
//   return age > 18;
// }
//console.log(ages.every(checkAge));  //false

//9) includes()

// let text = "Hello world, welcome to the universe.";
// let result = text.includes("world");
// console.log(result);   //true

// let text = "Hello world, welcome to the universe.";
// let result = text.includes("world", 12);
// console.log(result);   //false


//10) findindex()

// const ages = [3, 10, 18, 20];
// ages.findIndex(checkAge);
// function checkAge(age) {
//   return age > 18;
// }
// console.log(ages.findIndex(checkAge));  //3

// 11) fill()

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.fill("Kiwi");
// console.log(fruits.fill("Kiwi"));  //['Kiwi', 'Kiwi', 'Kiwi', 'Kiwi']

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.fill("Kiwi", 2, 4);
// console.log(fruits.fill("Kiwi", 2, 4));  //['Banana', 'Orange', 'Kiwi', 'Kiwi']


// 12) sort()

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits.sort());  //['Apple', 'Banana', 'Mango', 'Orange']

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// fruits.reverse();
// console.log(fruits.sort());    //['Apple', 'Banana', 'Mango', 'Orange']
// console.log(fruits.reverse()); // ['Orange', 'Mango', 'Banana', 'Apple']


// // 13) reverse()

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.reverse();
// console.log(fruits.reverse()); //['Banana', 'Orange', 'Apple', 'Mango']






