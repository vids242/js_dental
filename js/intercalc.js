function calculateint() {
    event.preventDefault()

    let p = parseFloat(document.getElementById("principal").value)
    let r = parseFloat(document.getElementById("rate").value)
    let n = parseFloat(document.getElementById("year").value)

    let ans = (p * r * n) / 100

    document.getElementById("ans").style.backgroundColor = "red";
    document.getElementById("ans").innerHTML = ans;
    
}