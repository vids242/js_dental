// Synchronous

// const firstMethod = () => {
//     console.log("First");
// }

// const secondMethod = () => {
//     console.log("Second");
// }

// const thirdMethod = () => {
//     console.log("Third");
// }

// firstMethod()
// secondMethod()
// thirdMethod()


// Synchronous Problem

// const firstMethod = () => {
//     console.log("First");
// }

// const secondMethod = () => {

//     const d = new Date()

//     while (new Date() - d < 5000) {

//     }
//     console.log("Second");
// }

// const thirdMethod = () => {
//     console.log("Third");
// }

// firstMethod()
// secondMethod()
// thirdMethod()


// asynchronous 

// Callback function

// const display = (data) => {
//     console.log(data);
// }

// const add = (a,b,Callback)  => {
//     let c=a+b;
//     Callback(c)
// }

// add(2,3, display)


// asynchrnous + callback

// console.log("Program started");

// const display = (data) => {
//         console.log(data);
//     }

// const get = (data, callback) => {

//     setTimeout(function() {
//           data.city="Surat"
//         callback(data)
//     }, 3000);
// }

// let dummy = {id:101, name:"Amit"}

// get(dummy,display)

// console.log("Program running.");



//1)
//Promise =>
// let promise = new Promise(function (resolve, reject) {
//     alert("Hello");
//     resolve(56);
// });

// console.log("First");

// setTimeout( function() {
//     console.log("Second");
// }, 2000)

// console.log("Third");
// console.log(promise);

//Output=>

// hello

// first

//third
//promise
//two (wait 2 sec.)


//2)
// async await =>

// async function waiting() {
//     let SuratWeather = new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             resolve("27 deg")
//         }, 2000)
//     }) 

//     let AhmedabadWeather = new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             resolve("21 deg")
//         }, 5000)
//     }) 

//     //SuratWeather.then(alert)
//     //AhmedabadWeather.then(alert)

//     console.log("Fetchoing Surat Weather please wait...."); //2
//     let SuratW = await SuratWeather
//     console.log("Fetched Surat Weather: " + SuratW);  //4

//     console.log("Fetchoing Ahmedabad Weather please wait....");  //5
//     let AhmedabadW = await AhmedabadWeather
//     console.log("Fetched Ahmedabad Weather: " + AhmedabadW); //6
// } 

// const wait = () => {
//     console.log(("Hello Guys...")); //3
// }

// console.log("Welcome to weather controal room"); //1
// let a = waiting()
// let b = wait()

//(jo a and b ni aagal 'await' lagadu na hoy to line ma na aave out put..)



//3)
//Promise.all
// let p1 = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         console.log("First");
//         resolve(10)
//     }, 1 * 1000);//1
// });

// let p2 = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Second");
//         resolve(20)
//     }, 2 * 1000);//2
// }); 

// let p3 = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Third");
//         resolve(30)
//     }, 3 * 1000); //3
// }) 

// Promise.all([p1, p2, p3]).then((result) => {
//     console.log(Result: ${result});    //4
// }).catch((error) => {
//     console.log(Error: ${error});
// })


// -----------------------------------------------------------------------------

// 2.promise

// console.log("Program Start");

// const Mypromis = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const data = { id: 101, name: "Vraj" }

//         resolve(data)
//     }, 2000);
// })

// Mypromis
//     .then((res) => console.log(res))
//     .catch((error) => console.log(error))
    
// console.log("In the program...");



//3. async await

// console.log("Program started.");

// const fetchData = async () => {
//     const response = await fetch('https://fakestoreapi.com/carts');
//     const data = await response.json()

//     console.log(data);

// }

// fetchData();

// console.log("Program running.......");


// 4.promise.all

// console.log("Program started.");


//     const promis1 = fetch('https://fakestoreapi.com/products')
//     const promis2 = fetch('https://fakestoreapi.com/users')
//     const promis3 = fetch('https://fakestoreapi.com/carts')

//     const respones = Promise.all([promis1,promis2,promis3])
//     .then((respones) => {
//         return Promise.all(respones.map((res) => res.json()));
//     })

//     respones
//     .then((res) => console.log(res))
//     .catch((error) => console.log(error.message))


// console.log("Program running.......");


// 5 callback hell 

// const first = (a,callback) => {
    // setTimeout(() => {
    //     console.log("first process");
    //     callback(a+10);
    // },2000)
// }
// const second = (a,callback) => {
//     setTimeout(() => {
//         console.log("second process");
//         callback(a*10);
//     },2000)
// }
// const third = (a,callback) => {
//     setTimeout(() => {
//         console.log("third process");
//         callback(a-50);
//     },2000)
// }

// first(10,function (r1) {
//     second(r1,function (r2) {
//         third(r2,function (r3) {
//             console.log(r3);
//         })
//     })
// })


// callback hell solve 

const first = (a) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("first process");
            resolve(a+10);
        },2000)
    })
}
const second = (a) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("second process");
            resolve(a*5);
        },2000)
    })
}
const third = (a) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("third process");
            resolve(a-20);
        },2000)
    })
}

first(10)
.then((data1) => second(data1))
.then((data2) => third(data2))
.then((data3) => console.log(data3))








