//1)
// const person = {
//     name: "amit",
//     Age : "20"
// }

//console.log(person.name, person.Age);  //amit 20

//2)
// const person = [
//     {
//         name: "Amit",
//         age: 25,
//     },
//     {
//         name: "Piyush",
//         age: 40,
//     }
// ];

// // person.map((v) => {
// //     console.log(v);
// // })

// person.map((v) => {
//     console.log(v.name, v.age);  //Amit 25 , Piyush 40
// })


//3)
// const person = [    
//     {
//         name: "Amit",
//        age: 25,
//        course: [
//            "c",
//            "html"
//        ]
//     }

// ];

// person.map((v) => {
//     console.log(v.name, v.age,);           //Amit 25
//     v.course.map((v) => console.log(v));   // c , html 
// })


//4)
// const person = [
//     {
//         name: "amit",
//         age: 19,
//         course: [
//             "c",
//             "html"
//         ]
//     },
//     {
//         name: "mayur",
//         age: 20,
//         course: [
//             "c",
//             "html"
//         ]
//     }
// ];

// person.map((v) => {
//     console.log(v.name, v.age,);           //Amit 25      ,mayur 20
//     v.course.map((v) => console.log(v));   // c , html     , c , html 
// })


//5)
// const myObj = {
//     name:"jd",
//     age:20,
//     cars:{
//         car1:"ford",
//         car2:"breza",
//         car3:"BMW"
//     }
// };

// for (let k in myObj) {
//     if (k === 'cars') {
//         for (let j in myObj[k]) {
//             console.log(myObj[k][j]);
//         }
//     } else {
//         console.log(myObj[k]);
//     }
// }

// console.log(myObj.name, myObj.age);


// for (let k in myObj.cars) {
//     console.log(myObj.cars[k]);
// }



//6)
// let data = {
//     personal_info: {
//         name: 'amit',
//         age: 25,
//         city: 'surat'
//     },
//     courses: ["C", "JavaScript", "React"],
//     branches: {
//         b1: {
//             admission: 50,
//             vacant_seat: 10
//         },
//         b2: {
//             admission: 30,
//             vacant_seat: 20
//         },
//         b3: {
//             admission: 25,
//             vacant_seat: 25
//         },
//         b4: {
//             admission: 40,
//             vacant_seat : 10
//         }
//     }
// };


// for (let m in data) {
//     if (m === 'personal_info') {
//         for (let n in data[m]) {
//             console.log(data[m][n]);
//         }
//     } else if (m === 'courses') {
//         data.courses.map((o) => console.log(o));      
//     } else if (m === 'branches') {
//         for (let p in data[m]) {
//             for (let q in data[m][p]) {
//                 console.log(data[m][p][q]);
//             }
//         }
//     }
// }


// *****************************************************************************

//1)
// const person = {
//     name: "amit",
//     Age : "20"
// }

// console.log(Object.keys(person)); //['name', 'Age']

// console.log(Object.values(person));  //['amit', '20']

// console.log(Object.entries(person));  //['name', 'amit'], ['Age', '20']

// console.log(Object.fromEntries(Object.entries(person))); //{name: 'amit', Age: '20'}

// console.log(person.hasOwnProperty('name'));  //true

// person.city = 'surat';

// console.log(person); // {name: 'amit', Age: '20', city: 'surat'}

// person['Age'] = '25';

// console.log(person); //{name: 'amit', Age: '25', city: 'surat'}

// Object.freeze(person); // as it is aana pachi nu rese.

// delete person.Age;

// console.log(person);  //{name: 'amit', city: 'surat'}



// *****************************************************************************


let institues = [
    {
        name: 'ABC IT Institute',
        seat: [
            {
                react: 15,
                node: 20,
                full_stack: 10,
                ui_ux: 0
            },
        ]
    },
    {
        name: 'XYZ IT Institute',
        seat: [
            {
                react: 0,
                node: 70,
                full_stack: 0,
                ui_ux: 10
            },
        ]
    },
    {
        name: 'PQR IT Institute',
        seat: [
            {
                react: 7,
                node: 0,
                full_stack: 0,
                ui_ux: 0
            },
        ]
    },
    {
        name: 'MNP IT Institute',
        seat: [
            {
                react: 0,
                node: 0,
                full_stack: 0,
                ui_ux: 0
            },
        ]
    }
]
