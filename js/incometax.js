function salarycap() {
    event.preventDefault();

    let salary = parseInt(document.getElementById("salary").value)

    if (salary >= 0 && salary <= 300000) {
        let tax1 = 0;
    } else if (salary <= 600000) {
        let tax2 = salary * 0.05
    } else if (salary <= 900000) {
        let tax3 = (salary - 600000) * 0.10
    } else if (salary <= 1200000) {
        let tax4 = (salary - 900000) * 0.15
    } else if (salary <= 1500000) {
        let tax5 =  (salary - 1200000) * 0.20
    } else if (salary >= 1500000) {
        let tax6 =  (salary - 1500000) * 0.30
    } else {
        tax = 0
    }

    document.getElementById("tax1").innerHTML = tax1
    document.getElementById("tax2").innerHTML = tax2
    document.getElementById("tax3").innerHTML = tax3
    document.getElementById("tax4").innerHTML = tax4
    document.getElementById("tax5").innerHTML = tax5
    document.getElementById("tax5").innerHTML = tax6

    let ans = text1+text2+text3+text4+text5+text6

    document.getElementById("ans").innerHTML = ans
}