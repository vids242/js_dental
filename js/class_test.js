// let arr1 = [2,25,8,66,1]

// arr1.splice(3,0,66)
// console.log(arr1);

// arr1.splice(1,1)
// console.log(arr1);

// arr1[4] = 10
// console.log(arr1);

// let ans = arr1.includes(8)
// console.log(ans);

// let ans = arr1.findIndex((v) => v===2)
// console.log(ans);


// --------------------------------------------------------------------------

// let arr1 = [10, 'amit', 'patel', true, 99, false]
// let arr2 = [80, 90, 11]

// 1
// let ans1 = arr1.filter((v) => typeof v === "string")
// let ans2 = arr1.filter((v) => typeof v === "number")
// let ans3 = arr1.filter((v) => typeof v === "boolean")
// console.log(ans1,ans2,ans3);

// 2
// let ans = arr2.filter((v) => v%2===0).reduce((a,v,i) => a+v,0)
// console.log(ans);

// 3
// arr1.splice(4,1)
// console.log(arr1);

// 4
// let ans = arr1.filter((v) => typeof v === "boolean").length
// console.log(ans);


// 5
// let ans = arr2.find((v) => v === 90)
// console.log(ans);

// let obj1 = {
//     id: 101,
//     name: 'amit',
//     city: 'surat'
// }

// console.log(obj1.hasOwnProperty('percentage'));

// obj1.favcolor='blue'
// console.log(obj1);

// obj1.city='vapi'
// console.log(obj1);

// let ans = Object.entries(obj1)
// console.log(ans);

// delete obj1.city;
// console.log(obj1);



const complexData = [
    {
        id: 1,
        name: 'John Doe',
        age: 30,
        contact: {
            email: 'john@example.com',
            phone: {
                mobile: '123-456-7890',
                home: '987-654-3210'
            }
        },
        skills: ['JavaScript', 'React', 'Node.js'],
        projects: [
            {
                projectName: 'Project A',
                technologies: ['React', 'Node.js'],
                team: [
                    { name: 'Alice', role: 'Developer' },
                    { name: 'Bob', role: 'Designer' },
                ]
            },
        ]
    },
    {
        id: 2,
        name: 'Jane Doe',
        age: 25,
        contact: {
            email: 'jane@example.com',
            phone: {
                mobile: '987-654-3210',
                home: '123-456-7890'
            }
        },
        skills: ['HTML', 'CSS', 'Vue.js'],
        projects: [
            {
                projectName: 'Project B',
                technologies: ['Vue.js', 'CSS'],
                team: [
                    { name: 'Charlie', role: 'Developer' },
                    { name: 'David', role: 'Tester' },
                ]
            },
        ]
    },
];

// complexData.forEach(person => {
//     Object.entries(person).forEach(([key, value]) => {
//         if (typeof value === 'object') {
//             Object.entries(value).forEach(([nestedKey, nestedValue]) => {
//                 if (typeof nestedValue === 'object') {
//                     Object.entries(nestedValue).forEach(([deepKey, deepValue]) => {
//                         console.log(${key}.${nestedKey}.${deepKey}: ${deepValue});
//                     });
//                 } else {
//                     console.log(${key}.${nestedKey}: ${nestedValue});
//                 }
//             });
//         } else {
//             console.log(${key}: ${value});
//         }
//     });
// });




