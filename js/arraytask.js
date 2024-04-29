let arr = [10, 30, 45, 89, 90, 34]


//1.    Finding the maximum element in an array
const MaxArray = () => {
    let ans = arr.sort((a, b) => b - a);
    console.log(ans[0]);

    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    console.log(max);
}
// MaxArray()


// 2.    Finding the minimum element in an array.
const MinArray = () => {
    let ans = arr.sort((a, b) => b - a);
    console.log(ans[arr.length - 1]);

    let min = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    console.log(min);
}
// MinArray()


// 3.    Sorting an array in ascending order.
const AscArray = () => {
    let ans = arr.sort((a, b) => a - b)
    console.log(ans);

    let temp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    console.log(arr);
}
// AscArray()


// 4.    Sorting an array in descending order.
const desArray = () => {
    let ans = arr.sort((a, b) => b - a)
    console.log(ans);

    let temp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    console.log(arr);
}
// desArray()


// 5.    Reversing an array.
const RevArray = () => {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    console.log(newArr);

    arr.reverse()
    console.log(arr);
}
// RevArray()


// 6.    Finding the sum of all elements in an array.
const SumArray = () => {
    let ans = arr.reduce((a, v, i) => a + v, 0)
    console.log(ans);

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = arr[i] + sum
    }
    console.log(sum);

}
// SumArray()


// 7.    Finding the average of all elements in an array.
const AvgArray = () => {
    let ans = arr.reduce((a, v, i) => a + v, 0)
    console.log(ans / arr.length);

    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = arr[i] + sum
    }
    console.log(sum / arr.length);
}
// AvgArray()


//8. Checking if an array contains a specific element.
const FindArray = () => {
    let ans = arr.find((a) => a === 34)
    console.log(ans);

    let flag = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 34) {
            flag = true
        }
    }

    if (flag) {
        console.log('availabel');
    } else {
        console.log('not availabel');
    }

}
// FindArray()


//9. Removing duplicates from an array.
const DupArray = () => {
    let arr1 = [10, 20, 30, 10, 20, 30, 10, 10]

    // for (let i = 0; i < arr1.length; i++) {
    //     for (let j = i + 1; j < arr1.length; j++) {
    //         if (arr1[i] == arr1[j]) {
    //             for (let k = i; k < arr1.length; k++) {
    //                 arr[k] = arr[k + 1]
    //             }
    //             arr1.length--;
    //             j--;
    //         }
    //     }
    // }
    // console.log(arr1);

    let ans = arr1.filter((v, i) => arr1.indexOf(v) === i)
    console.log(ans);
}
// DupArray()


//10. Merging two arrays into a new array.
const MrgArray = () => {
    let arr1 = [10, 20, 30, 'vraj']
    let arr2 = [40, 50, 60, 'het']
    let arr3 = []

    let ans = arr1.concat(arr2)
    console.log(ans);

    for (let i = 0; i < arr1.length; i++) {
        arr3[i] = arr1[i]
    }
    for (let i = 0; i < arr2.length; i++) {
        arr3[arr1.length + i] = arr2[i]
    }
    console.log(arr3);
}
// MrgArray()



// 11.Splitting an array into two arrays based on a condition
const SplitArray = () => {
    let arr1 = [10, 20, 'vraj', 'het']

    let ans = arr1.filter((v) => typeof v === 'number')
    let ans1 = arr1.filter((v) => typeof v === 'string')
    console.log(ans, ans1);
}
// SplitArray()



// 13.Rotating an array by a given number of positions.
let arr1 = [10, 20, 30, 40];
const rotatelement = (arr1, ele) => {
    for (let i = 0; i < ele; i++) {
        let ans = arr1.pop();
        arr1.unshift(ans);
    }
    console.log(arr1);
}
// rotatelement(arr1,2);



//14. Finding the second largest element in an array.
let arr4 = [10, 75, 50, 80, 15]
//80, 75, 50, 15, 10
const secArr = (num1) => {
    arr4.sort((a, b) => b - a);
    console.log(arr4[num1 - 1]);
}
//secArr(3); //50



// 15. Finding the k-th smallest element in an array.
val = [25, 55, 75, 15, 95, 35, 5]
// 5, 15, 25, 35, 55, 75, 85
const smalArr = (num1) => {
    val.sort((a, b) => a - b);
    console.log(val[num1 - 1]);    //25
}
// smalArr(4);   //35



// 17.    Finding the median of an array.
let arr3 = [67, 55, 88, 99, 77, 44, 100]
//44, 55, 67, 77, 88, 99
const median = (arr) => {
    arr.sort((a, b) => a - b)

    if (arr.length % 2 === 0) {
        let ind = arr.length / 2;
        // console.log(arr[ind]);
        let med = (arr[ind - 1] + arr[ind]) / 2
        console.log(med);
    } else {
        let index = arr.length / 2;
        let ans = Math.floor(index);
        console.log(arr[ans]);

    }
}
// median(arr3)


// 19. Checking if two arrays are equal or not.
let arrM = [10, 20, 30, 40, 50];
let arrN = [10, 20, 30, 40, 50];
const checkArr = () => {
    if (arrM.length === arrN.length) {
        let flag = true;

        arrM.map((v, i) => {
            if (arrM[i] !== arrN[i]) {
                flag = false
            }
        })

        if (flag) {
            console.log("Same");
        } else {
            console.log("Not Same");
        }
    } else {
        console.log("Both Array not same");
    }
}
// checkArr();


// 23. Finding the index of the first occurrence of an element in an array.
let arrK = [10, 20, 30, 40, 50, 30, 50];
const firstArr = (arr, n) => {
    let ans = arrK.indexOf(n);

    console.log(ans);
}
//firstArr(arrK, 50);  //4



//24. Finding the index of the last occurrence of an element in an array.
let arrL = [10, 20, 30, 40, 50, 30, 50];
const lastArr = (arr, n) => {
    let ans = arrL.lastIndexOf(n);

    console.log(ans);
}
// lastArr(arrK, 50);  //6

let roll_no = [1,7,25,35,90]
let participate = [1,25,90]

const includearray = () => {
   
    
}
includearray()


// 25.  Removing all occurrences of an element from an array.
let arr5 = [10,33,23,34,67,33,90]
const RemoveOcc = (arr,ele) => {
    let ans = arr.filter((v) => v !==  ele)
    console.log(ans);
}
RemoveOcc(arr5,33)


// 26. Replacing all occurrences of an element in an array with a new element.
const RevOcc = (arr,ele,newEle) => {
    let ans = arr.map((v)=> v === ele ? newEle : v )
    console.log(ans);
}
RevOcc(arr5,33,100)


// 27.  Creating a new array with the elements of the original array in reverse order, without modifying the original array.
const RevOrder = () => {
    
}
RevOrder()
