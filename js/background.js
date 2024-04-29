function backchange (){
    event.preventDefault()
    
let change = document.getElementById("section").value;

     if (change == 'in'){
        document.getElementById("body").style.backgroundColor = "red"
    } else if (change == 'us') {
        document.getElementById("body").style.backgroundColor = "blue"
    } else if (change == 'uk') {
        document.getElementById("body").style.backgroundColor = "yellow"
    }
}