// 1. concat()

// let text1 = "I";
// let text2 = "Am";
// let result = text1.concat(" ", text2);
// console.log(result);
// I Am


// 2. includes()

// let text = "My Name Is Vraj";
// let result = text.includes("Name");
// console.log(result);             //bullean
// true

// 3.indexOf()

// let text = "Hello world, welcome to the universe.";
// console.log(text.indexOf("e", 5));
// 14

// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("world");
// console.log(result);
// 6

// 4.startsWith()

// let text = "Hello world, welcome to the universe.";
// console.log(text.startsWith("Hello"));
// true


// 5.endsWith()

// let text = "Hello world";
// let result = text.endsWith("world");
// console.log(result);
// true


// 6.slice

// let text = "Hello world!";
// let result = text.slice(0, 5);    
// console.log(result);   //show 0 to 5 letter
// Hello

// let result = text.slice(3);
// console.log(result);     // cut start 3 letter
// lo world!



// 7.substring()

// let text = "Hello world!";
// let result = text.substring(1, 4);      show 1 to 4 letter

// let result = text.substring(2);         cut start 2 letter and show every letter


// 8.substr()

// let text = "Hello world!";
// let result = text.substr(1, 4);

// let result = text.substr(2);


// 9.replace()

// let text = "Visit Microsoft!";
// let result = text.replace("Microsoft", "W3Schools");

// let text = "Mr Blue has a blue house and a blue car";
// let result = text.replace(/blue/g, "red");


// 10.replaceAll()

// text = text.replaceAll("Cats","Dogs");
// text = text.replaceAll("cats","dogs");

// text = text.replaceAll(/Cats/g,"Dogs");
// text = text.replaceAll(/cats/g,"dogs");


// 11.trim()

// let text = "       Hello World!        ";
// let result = text.trim();


// 12.split()

// let text = "How are you doing today?";
// const myArray = text.split(" ");

// let text = "How are you doing today?";
// const myArray = text.split(" ");
// let word = myArray[1];

// const myArray = text.split("");

// const myArray = text.split(" ", 3);



// 13. match()

// let text = "The rain in SPAIN stays mainly in the plain";
// text.match("ain");

// let text = "The rain in SPAIN stays mainly in the plain";
// text.match("No");

// let text = "The rain in SPAIN stays mainly in the plain";
// text.match(/ain/gi);


// 14.test()
// let text = "The best things in life are free"; let pattern = /e/;
// let result = pattern.test(text);             // boolean


// 15.toLowerCase()

// let text = "Hello World!";
// let result = text.toLowerCase();


// 16.toUpperCase()

// let text = "Hello World!";
// let result = text.toUpperCase();
// console.log(result);


// ---------------------------------------------------------------

// let s = 'ok';
// console.log(s, typeof s); // ok string

// let s1 = new String('done')
// console.log(s1, typeof s1); // [String: 'done'] object

let city = 'surat';

// let message = My city is: ${city};
// console.log(message);  // My city is: surat

// String coercion

// console.log('3' + 5 + 7); //357
// console.log(5 + 7 + '3'); // 123

// console.log('amit' > 'om'); // false

console.log(city.length); // 5