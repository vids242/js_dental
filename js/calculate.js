let x = Math.floor(Math.random()*10);

let y = Math.floor(Math.random()*10);


document.getElementById("num1").innerHTML = x;
document.getElementById("num2").innerHTML = y;

let z = x + y ;

function hendalcaptcha() {
    event.preventDefault()

    let ans = parseInt(document.getElementById("ans").value);
    let number = document.contactForm.ans.value
    
    if (ans === z) {
        document.getElementById("numbeErr").innerHTML = 'Currect Ans'
        
    } else {
        if (number === '') {
            document.getElementById("numbeErr").innerHTML = 'Please Enter Your Ans'
        } else {
            if (isNaN(number)) {
                document.getElementById("numbeErr").innerHTML = 'Please Enter Valid Ans'
            }  else {
                document.getElementById("numbeErr").innerHTML = 'Incoorect ans' 
            }
        }
    } 

   
}
