const arr = [10,20,30]
// spreading opratore 

// copy 
// const arr1 = [...arr]
// console.log(arr1);  //[ 10, 20, 30 ]

// merge 
// const arr1 = [0,1,...arr,40,50]
// console.log(arr1);  //[ 0,  1, 10, 20,30, 40, 50 ]

// destruction 
// const [first,second,third] = arr
// console.log(second); //20



let obj = {
    id:101,
    name:"Vraj",
    city:"Surat"
}

// copy 
// let obj1 = {...obj}
// console.log(obj1); //{ id: 101, name: 'Vraj', city: 'Surat' }

// merge 
// let obj2 = {...obj,age:18}
// console.log(obj2); // { id: 101, name: 'Vraj', city: 'Surat', age: 18 }

// destruction
// const {id,name,city} = obj
// console.log(city); // Surat