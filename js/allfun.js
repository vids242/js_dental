//1 push()  add element from last-one 

// let arr1 = ['vraj', 'bhargav', 'meet', 'gaurav']
// arr1.push('pream')
// console.log(arr1);
// ['vraj', 'bhargav', 'meet', 'gaurav', 'pream']

// let arr2 = [18, 22, 32, 45]
// arr2.push(50)
// console.log(arr2);
// [18, 22, 32, 45, 50]

// let arr3 = ['vraj', 18, 'bhargav', 22]
// arr3.push('meet',32)
// console.log(arr3);
// ['vraj', 18, 'bhargav', 22, 'meet', 32]

// ---------------------------------------------------------------------------------

//2 pop() remove/delet element from last-one

// let arr1 = ['vraj', 'bhargav', 'meet', 'gaurav']
// arr1.pop()
// console.log(arr1);
// ['vraj', 'bhargav', 'meet']

// let arr2 = [18, 22, 32, 45]
// arr2.pop()
// console.log(arr2);
// [18, 22, 32]

// let arr3 = ['vraj', 18, 'bhargav', 22]
// arr3.pop()
// console.log(arr3);
// ['vraj', 18, 'bhargav']

// ---------------------------------------------------------------------------------

// //3 unshift() add element from first-one 

// let arr1 = ['vraj', 'bhargav', 'meet', 'gaurav']
// arr1.unshift('pream')
// console.log(arr1);
// ['pream', 'vraj', 'bhargav', 'meet', 'gaurav']

// let arr2 = [18, 22, 32, 45]
// arr2.unshift(50)
// console.log(arr2);
// [50, 18, 22, 32, 45]

// let arr3 = ['vraj', 18, 'bhargav', 22]
// arr3.unshift('meet',32)
// console.log(arr3);
// ['meet', 32, 'vraj', 18, 'bhargav', 22]

// ---------------------------------------------------------------------------------

// //4 shift() remove/delet element from first-one 

// let arr1 = ['vraj', 'bhargav', 'meet', 'gaurav']
// arr1.shift()
// console.log(arr1);
// ['bhargav', 'meet', 'gaurav']

// let arr2 = [18, 22, 32, 45]
// arr2.shift()
// console.log(arr2);
// [22, 32, 45]

// let arr3 = ['vraj', 18, 'bhargav', 22]
// arr3.shift()
// console.log(arr3);
// [18, 'bhargav', 22]

// ---------------------------------------------------------------------------------

// //5 splice(index,howmuch,add)  add element spacificaliye

// //-splice(index,howmuch) remove/delet element spacificaliye


// let arr1 = ['vraj', 'bhargav', 'meet', 'gaurav']
// arr1.splice(1,0,'pream')
// console.log(arr1);
// ['vraj', 'pream', 'bhargav', 'meet', 'gaurav']

// let arr2 = [18, 22, 32, 45]
// arr2.splice(2,1)
// console.log(arr2);
//  [18, 22, 45]

// let arr3 = ['vraj', 18, 'bhargav', 22]
// arr3.splice(2,0,'pream',30)
// console.log(arr3);
// ['vraj', 18, 'pream', 30, 'bhargav', 22]

// ---------------------------------------------------------------------------------

//6 concat()marge array

// let arr1 = ['vraj', 'bhargav', 'meet', 'gaurav']
// let arr2 = [18, 22, 32, 45]
// let arr3 = ['vraj', 18, 'bhargav', 22]

// let ans1 =arr1.concat(arr2)
// console.log(ans1);
// ['vraj', 'bhargav', 'meet', 'gaurav', 18, 22, 32, 45]

// let ans2 =arr1.concat(arr3)
// console.log(ans2);
// ['vraj', 'bhargav', 'meet', 'gaurav', 'vraj', 18, 'bhargav', 22]

// let ans3 =arr1.concat(arr2,arr3)
// console.log(ans3);
// ['vraj', 'bhargav', 'meet', 'gaurav', 18, 22, 32, 45, 'vraj', 18, 'bhargav', 22]

// ---------------------------------------------------------------------------------

// 7 some() if condition true then return boolean

// let arr1 = ['vraj', 'bhargav', 'meet', 'gaurav']
// let ans1 = arr1.some((a) => a === 'vraj')
// console.log(ans1);
// true

// let arr2 = [18, 22, 32, 45]
// let ans2 = arr2.some(function (a) {
//     if (a === 22) {
//         return true
//     } else {                   
//         return false
//     }
// })
// console.log(ans2);
// // true

// let arr3 = ['vraj', 18, 'bhargav', 22]
// let ans3 = arr3.some((a) => a === 'VRAJ')
// console.log(ans3);
// false
// --------------
// let ans3 = arr3.some(function (a)  {
//     if (a === 22) {
//         return true
//     } else {
//         return false
//     }
// })
// console.log(ans3);
// true

// ---------------------------------------------------------------------------------

// 8 toString() convert array into string

// let arr1 = ['vraj', 'bhargav', 'meet', 'gaurav']
// let ans1 = arr1.toString()
// console.log(ans1);
// // vraj,bhargav,meet,gaurav

// let arr2 = [18, 22, 32, 45]
// let ans2 = arr2.toString()
// console.log(ans2);
// 18,22,32,45

// let arr3 = ['vraj', 18, 'bhargav', 22]
// let ans3 = arr3.toString()
// console.log(ans3);
// vraj,18,bhargav,22

// ---------------------------------------------------------------------------------

// // 9 find() if condtion true then return checked value

// let arr1 = ['vraj', 'bhargav', 'meet', 'gaurav']
// let ans1 = arr1.find((a)=>a==='meet')
// console.log(ans1);
// // meet


// let arr2 = [18, 22, 32, 50]
// let ans2 = arr2.find((a)=>a===22)
// console.log(ans2);
// // 22


// let arr3 = ['vraj', 18, 'bhargav', 22,'vraj', 18]
// let ans3 = arr3.find((a)=>a==='vraj')
// console.log(ans3);
// // vraj

// ---------------------------------------------------------------------------------

// 10 foreach() its give array value end index

// let arr1 = ['vraj', 'bhargav', 'meet', 'gaurav']  
// arr1.forEach((v,i) => {
//     console.log(i,v);
// })
// 0 'vraj'
// 1 'bhargav'
// 2 'meet'
// 3 'gaurav'

// let arr2 = [18, 22, 32, 50]
// arr2.forEach((v,i) => {
//     console.log(i,v);
// })
// 0 18
// 1 22
// 2 32
// 3 50

// let arr3 = ['vraj', 18, 'bhargav', 22,'vraj', 18]
// arr3.forEach((v,i) => {
//     console.log(i,v);
// })
// 0 'vraj'
// 1 18
// 2 'bhargav'
// 3 22
// 4 'vraj'
// 5 18

// ---------------------------------------------------------------------------------

// 11 map its give index value * / etc

// let arr1 = ['vraj', 'bhargav', 'meet', 'gaurav']
// arr1.map((v,i) => {
//     console.log(i,v);
// })

// let arr2 = [18, 22, 32, 50]
// arr2.map((v,i) => {
//     console.log(i,v);
// })
// 0 18
// 1 22
// 2 32
// 3 50


// let arr3 = ['vraj', 18, 'bhargav', 22,'vraj', 18]
// arr3.map((v,i) => console.log(i,v))
// 0 'vraj'
// 1 18
// 2 'bhargav'
// 3 22
// 4 'vraj'
// 5 18

// ---------------------------------------------------------------------------------

// 12 split() means cut into worde / string

// let text = 'My Name Is Vraj'
// let ans = text.split(' ')
// console.log(ans);
// ['My', 'Name', 'Is', 'Vraj']
// ---------------
// let text = 'My Name Is Vraj'
// let ans = text.split('')
// console.log(ans);
// ['M', 'y', ' ', 'N', 'a', 'm', 'e', ' ', 'I', 's', ' ', 'V', 'r', 'a', 'j']
// ------------------
// let text = 'My Name Is Vraj'
// let ans = text.split(' ')
// let word = ans[3]
//  console.log(word);  
//Vraj
// --------------------
// let text = 'My Name Is Vraj'
// console.log(text.split(" ",2));
// My Name

// ---------------------------------------------------------------------------------

// 13 slice(index,howmuchprint) delet/remove element

// let arr1 = ['vraj', 'bhargav', 'meet', 'gaurav']
// let ans1 = arr1.slice(0,2)
// console.log(ans1);
// ['vraj', 'bhargav']

// let arr2 = [18, 22, 32, 50,67,90,53]
// let ans2 = arr2.slice(2,5)
// console.log(ans2);
// [32, 50, 67]

// let arr3 = ['vraj', 18, 'bhargav', 22,'vraj', 18]
// let ans3 = arr3.slice(4,6)
// console.log(ans3);
// ['vraj', 18]

// ---------------------------------------------------------------------------------

// 14 indexOf(value)find index

// let arr1 = ['vraj', 'bhargav', 'meet', 'bhargav']
// let ans1 = arr1.indexOf('bhargav')
// console.log(ans1);
// index 1

// let arr2 = [18, 22, 32, 50,22,32]
// let ans2 = arr2.indexOf(32)
// console.log(ans2);
// index 2

// let arr3 = ['vraj', 18, 'bhargav', 22,'vraj', 25]
// let ans3 = arr3.indexOf(25)
// console.log(ans3);
// index 5

// ---------------------------------------------------------------------------------

// 15 every(array condition) return boolean if condition is true

// let arr1 = [-1,0,2,4,78]
//  let ans1 = arr1.every((poss) => poss > 0)
// console.log(ans1);
// // false

// let arr2 = [19, 22, 32, 50,22,32]
// let ans2 = arr2.every((age) => age > 18)
// console.log(ans2);
// true

// let arr3 = [50,70,89,100,35]
// let ans3 = arr3.every((mark) => mark > 33)
// console.log(ans3);
// true

// ---------------------------------------------------------------------------------

// 16 includes(value)return boolean if value is true

// let arr1 = ['vraj', 'bhargav', 'meet', 'bhargav']
// let ans1 = arr1.includes('bhargav')
// console.log(ans1);
// true

// let arr2 = [18, 22, 32, 50,22,32]
// let ans2 = arr2.includes(1)
// console.log(ans2);
// false

// let arr3 = ['vraj', 18, 'bhargav', 22,'vraj', 25]
// let ans3 = arr3.includes('bhargav'&&22)
// console.log(ans3);
// true


// ---------------------------------------------------------------------------------

// 17 filter (multi condition) return array

// let arr1 = [-1,0,2,4,78]
//  let ans1 = arr1.filter((poss) => poss >= 0 && poss <= 18)
// console.log(ans1);
//[0, 2, 4]

// let arr2 = [19, 22, 32, 50,22,32]
// let ans2 = arr2.filter((age) => age > 18 && age <30)
// console.log(ans2);
// [19, 22, 22]

// let arr3 = [50,70,22,100,33]
// let ans3 = arr3.filter((mark) => mark >= 33 )
// console.log(ans3);
// [50, 70, 100, 33]

// ---------------------------------------------------------------------------------

// 18 reduce (calculation) sum of array

// let arr1 = [-1,0,2,4,78]
// let ans1 = arr1.reduce((accumlator, v, i) => accumlator + v, 0);
// console.log(ans1);
// 83

// let arr2 = [19, 22, 32, 50,22,32]
// let ans2 = arr2.reduce((accumlator, v, i) => accumlator + v, 0);
// console.log(ans2);
// 177

// let arr3 = [50,70,22,100,33]
// let ans3 = arr3.reduce((accumlator, v, i) => accumlator + v, 2);
// console.log(ans3);
// 277

// ---------------------------------------------------------------------------------

// 19 findindex(condition) return index

// let roll_no = [45, 2, 37, 8, 91, 10];
// let ans = roll_no.findIndex((v) => v === 8);
// console.log(ans);  //3
// roll_no[ans] = 99;
// console.log(roll_no); //45, 2, 37, 99, 91, 10]
//return index of Element, -1 for not finding Element

// let arr1 = ['vraj', 'bhargav', 'meet', 'bhargav']
// let ans1 = arr1.findIndex((a) => a === 'meet')
// console.log(ans1);
// index 2

// let arr2 = [18, 22, 32, 50,22,32]
// let ans2 = arr2.findIndex((a) => a === 32)
// console.log(ans2);
// index 2

// let arr3 = ['vraj', 18, 'bhargav', 22,'het', 25]
// let ans3 = arr3.findIndex((a) => a === 'het')
// console.log(ans3);
// index 4

// ---------------------------------------------------------------------------------

// 20 update ()


// let arr1 = [-1,0,2,4,78]
// arr1[0]=77
// console.log(arr1);
// [77, 0, 2, 4, 78]

// let arr2 = ['vraj', 'bhargav', 'meet', 'bhargav']
// arr2[3]='gaurav'
// console.log(arr2);
// ['vraj', 'bhargav', 'meet', 'gaurav']

// let arr3 = ['vraj', 18, 'bhargav', 22,'het', 25]
// arr3[4]='vraj'
// console.log(arr3);
//  ['vraj', 18, 'bhargav', 22, 'vraj', 25]

// ---------------------------------------------------------------------------------

// 21  lastindexof(value) if multi value give last index number

// let arr1 = ['vraj', 'bhargav', 'meet', 'bhargav']
// console.log(arr1.lastIndexOf('bhargav'));
// index 3

// let arr2 = [-1,0,2,4,78]
// console.log(arr2.lastIndexOf(78));
// index 4

// let arr3 = ['vraj', 18, 'bhargav', 22,'het', 25]
// console.log(arr3.lastIndexOf('vraj'));
// index 0

// ---------------------------------------------------------------------------------

// 22 fill(value,fromindex)  change array value 

// let roll_no = [450, 25, 370, 80, 37, 10];
// roll_no.fill(0, 1);
// console.log(roll_no);  //[450, 0, 0, 0, 0, 0] & fill 0 from 1st index

// ---------------------------------------------------------------------------------

// 23 sort(condition) ascanding descanding Alphabet end Number

//let roll_no = [450, 25, 370, 80, 37, 10];
//console.log(roll_no.sort((a, b) => a-b));  //[10, 25, 37, 80, 370, 450]
//console.log(roll_no.sort((a, b) => b-a));   //[450, 370, 80, 37, 25, 10]

// let city = ['vapi', 'vadodara', 'valsad', 'surat'];
// //console.log(city.sort());   //['surat', 'vadodara', 'valsad', 'vapi']
 
//(i) if the result is negative, a is sorted before b.

//(ii) if the result is positive, b is sorted before a.

//(iii) if the result is 0, no changes are done with the sort order of the two values

// ---------------------------------------------------------------------------------

// 24 reverse() reverse string in alphabet/Number

// let city = ['vapi', 'vadodara', 'valsad', 'surat'];
// console.log(city.sort().reverse()); // ['vapi', 'valsad', 'vadodara', 'surat']

