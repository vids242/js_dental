// 1 isArray() to check array

// let arr=[10,20,30]
// console.log(Array.isArray(arr));
// True
// Return boolean

//---------------------------------------------------------------------------------

// 2 concat() marge two array

// let arr1 = [11,22,33,44]
// let arr2 = ['vraj','het','dixit']
// let ans = arr1.concat(arr2)
// console.log(ans);
// [11, 22, 33, 44, 'vraj', 'het', 'dixit']
// Return array

//---------------------------------------------------------------------------------

// 3  some() if condition true then return boolean

// let arr1 = [11,22,33,44]
// let ans = arr1.some((v) => v === 22)
// console.log(ans);
// True
// Return boolean

//---------------------------------------------------------------------------------

// 4 toString() convert array into string

// let arr1 = ['vraj',99,'het',32]
// let ans = arr1.toString()
// console.log(ans);
// vraj,99,het,32
// Return string

//---------------------------------------------------------------------------------

// 5 push(value) add value from last

// let arr2 = [18, 22, 32, 45]
// arr2.push(50)
// console.log(arr2);
// [18, 22, 32, 45, 50]
// Return Array

//---------------------------------------------------------------------------------

// 6 pop() remove/delet element from last-one

// let arr3 = ['vraj', 18, 'bhargav', 22]
// arr3.pop()
// console.log(arr3);
// ['vraj', 18, 'bhargav']
// Return Array

//---------------------------------------------------------------------------------

// 7 unshift() add element from first-one 

// let arr2 = [18, 22, 32, 45]
// arr2.unshift(50)
// console.log(arr2);
// [50, 18, 22, 32, 45]
// Return Array

//---------------------------------------------------------------------------------

// 8 shift() remove/delet element from first-one 

// let arr = [22,99,45,67,87]
// arr.shift()
// console.log(arr);
// [99, 45, 67, 87]
// Return Array

//---------------------------------------------------------------------------------

// 9 find() if condtion true then return checked value

// let arr = ['vraj',99,'pream',80]
// let ans = arr.find((v) => v === 'pream')
// console.log(ans);
// pream
// Return Value

//---------------------------------------------------------------------------------

// 10 splice(index,howmuch,add)  add element spacificaliye

// //-splice(index,howmuch) remove/delet element spacificaliyesplice()

// let arr = [22,33,44,55,66]
// arr.splice(2,0,77)
// console.log(arr);
// [22, 33, 77, 44, 55, 66]
// Return Array

// let arr = [22,33,44,55,66]
// arr.splice(2,1)
// console.log(arr);
// [22,33,55,66]
// Return Array

//---------------------------------------------------------------------------------


// 11 split() means cut into worde / string

// let text = 'Bit Khanan It Education'
// let ans = text.split(" ")
// console.log(ans);
// ['Bit', 'Khanan', 'It', 'Education']
// Return Multi String From Word

// let text = 'Bit Khanan'
// let ans = text.split("")
// console.log(ans);
// ['B', 'i', 't', ' ', 'K', 'h', 'a', 'n', 'a', 'n']
// Return Multi String From Each Alfabet

//---------------------------------------------------------------------------------

// 12 slice (index,howmuchprint) delet/remove element

// let arr = [22,33,44,55,66]
// let ans = arr.slice(2,4)
// console.log(ans);
// [44, 55]

//---------------------------------------------------------------------------------

// 13 Map its give index value * / etc

// let arr = [22,33,44,55,66]
// arr.map((v,i) => console.log(i,v))
// 0 22
// 1 33
// 2 44
// 3 55
// 4 66
// NO Return

//---------------------------------------------------------------------------------

// 14 filter (multi condition) return array

// let arr = [19, 22, 32, 50,22,32]
// let ans = arr.filter((age) => age > 18 && age < 40)
// console.log(ans);
// [19, 22, 32, 22, 32]
// Retuen array

//---------------------------------------------------------------------------------

// 15 reduce (calculation) sum of array

// let arr3 = [50, 70, 22, 100, 33]
// let ans3 = arr3.reduce((accumlator, v, i) => accumlator + v, 0);
// console.log(ans3);
//275

//---------------------------------------------------------------------------------

// 16 indexof (value)find index

// let arr = [50, 70, 22, 100, 33]
// let ans = arr.indexOf(100)
// console.log(ans);
// Index 3

//---------------------------------------------------------------------------------

// 17 lastIndexOf (value) if multi value give last index number

// let arr1 = ['vraj', 'bhargav', 'meet', 'bhargav']
// console.log(arr1.lastIndexOf('bhargav'));
// index 3

//---------------------------------------------------------------------------------

// 18 every (array condition) return boolean if condition is true

// let arr3 = [50,70,89,100,35]
// let ans3 = arr3.every((mark) => mark > 33)
// console.log(ans3);
// true

//---------------------------------------------------------------------------------

// 19 includes (value)return boolean if value is true

// let arr1 = ['vraj', 'bhargav', 'meet', 'bhargav']
// let ans1 = arr1.includes('bhargav')
// console.log(ans1);
// true

//---------------------------------------------------------------------------------

// 20 findindex (condition) return index

// let roll_no = [45, 2, 37, 8, 91, 10];
// let ans = roll_no.findIndex((v) => v === 8);
// console.log(ans);
// Index 3
//return index of Element, -1 for not finding Element

//---------------------------------------------------------------------------------

// 21 fill (value,fromindex)  change array value 

// let roll_no = [45, 2, 37, 8, 91, 10];
// roll_no.fill(0,1)
// console.log(roll_no);
//[45, 0, 0, 0, 0, 0]

//---------------------------------------------------------------------------------

// 22 sort(condition) ascanding descanding Alphabet end Number

// let roll_noo = [450, 25, 370, 80, 37, 10];
// console.log(roll_noo.sort((a,b) => a-b));
// [10, 25, 37, 80, 370, 450]

// let roll_no = [450, 25, 370, 80, 37, 10];
// console.log(roll_no.sort((a,b) => b-a));
// [450, 370, 80, 37, 25, 10]

// let city = ['vapi', 'vadodara', 'valsad', 'surat'];
// console.log(city.sort());
// ['surat', 'vadodara', 'valsad', 'vapi']

//(i) if the result is negative, a is sorted before b.
//(ii) if the result is positive, b is sorted before a.
//(iii) if the result is 0, no changes are done with the sort order of the two values

//---------------------------------------------------------------------------------

// 23 reverse() reverse string in alphabet/Number

// let city = ['vapi', 'vadodara', 'valsad', 'surat'];
// console.log(city.sort().reverse()); // ['vapi', 'valsad', 'vadodara', 'surat']