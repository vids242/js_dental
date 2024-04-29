let x = parseInt(prompt("Please Enter Value of X"))
let y = parseInt(prompt("Please Enter Value of y"))

try {
    let ans;

    if (y === 0) {
        throw new Error("Divide By Zero Is Not Possible")
    }
    ans = x / y;

    console.log(ans);

} catch (error) {
    console.log(error);
} finally{
    console.log("Operation Completed");
}

