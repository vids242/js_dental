// 23. Finding the index of the first occurrence of an element in an array.

let arra1 = [10, 20, 30, 40, 50, 30, 50];

const firstoccindex = (arr, n) => {
    let ans = arra1.indexOf(n);

    console.log(ans);
}

// 24. Finding the index of the last occurrence of an element in an array.
let array1 = [10, 20, 30, 40, 50, 30, 50];

const lastoccindex = (arr, n) => {
    let ans = array1.lastIndexOf(n);
    console.log(ans);
}