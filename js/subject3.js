function prdisplay() {
    event.preventDefault();

    let x = parseInt(document.getElementById("first").value)
    let y = parseInt(document.getElementById("second").value)
    let z = parseInt(document.getElementById("third").value)

    let res = (x + y + z) / 3;



    let Ferror = true
    let Serror = true
    let Cerror = true
    if (isNaN(x)) {
        document.getElementById("FirstErr").innerHTML = "Enter Valide Marks"
    } else {
        document.getElementById("FirstErr").innerHTML = ""
        Ferror = false
    }
    if (isNaN(y)) {
        document.getElementById("SecErr").innerHTML = "Enter Valide Marks"
    } else {
        document.getElementById("SecErr").innerHTML = ""
        Serror = false
    }
    if (isNaN(z)) {
        document.getElementById("ThrErr").innerHTML = "Enter Valide Marks"
    } else {
        document.getElementById("ThrErr").innerHTML = ""
        Cerror = false
    }

    if (Ferror || Serror || Cerror) {
        return false
    } else {
        document.getElementById("acc").innerHTML ="First Subject Marks" + ":" + x;
        document.getElementById("stat").innerHTML ="Second Subject Marks" + ":" +  y;
        document.getElementById("eco").innerHTML = "Third Subject Marks" + ":" + z;
        parseFloat(document.getElementById("ans").innerHTML = "Pr" + ":" + res)
        document.getElementById("ans").style.display="block"
    }

}