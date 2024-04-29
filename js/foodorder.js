function hendalfood() {
    event.preventDefault()

    let food = parseInt(document.getElementById("food").value)
    let fries = parseInt(document.getElementById("fries").value)
    let cold = parseInt(document.getElementById("type").value)
    let count = parseInt(document.getElementById("count").value)
    let count1 = parseInt(document.getElementById("count1").value)
    let num = parseInt(document.getElementById("num").value)
    let coupan = document.getElementById("coupan").value
    let val = parseInt(document.getElementById("cold").value)

    let res1 = 0, res2 = 0, res3 = 0, discount = 0
    let name, name2


    if (food == 40) {
        name = 'burger'
        res1 = food * count
    } else if (food == 70) {
        name = 'pizza'
        res1 = food * count
    } else if (food == 100) {
        name = 'sandwitch'
        res1 = food * count
    } else if (food == 150) {
        name = 'combo'
        res1 = food * count
    }
    if (fries === 60) {
        res2 = fries * count1
    }
    if (val === 1) {
        if (cold == 20) {
            name2 = 'pepsi'
            res3 = cold * num
        } else if (cold == 25) {
            name2 = 'maza'
            res3 = cold * num
        } else if (cold == 30) {
            name2 = 'jeera'
            res3 = cold * num
        }
    } else {
        name2 = '0'
    }

    let ans = res1 + res2 + res3

    if (coupan === 'abc') {
        discount = ans * 0.20
    }

    let total = ans - discount


    console.log(res1, res2, res3, discount, total);
    document.getElementById("pr1").innerHTML = name + ' ' + '=' + ' ' + food + ' ' + '*' + ' ' + count + ' ' + '=' + ' ' + res1
    document.getElementById("pr2").innerHTML = fries + ' ' + '*' + ' ' + count1 + ' ' + '=' + ' ' + res2
    document.getElementById("pr3").innerHTML = name2 + ' ' + '=' + ' ' + cold + ' ' + '*' + ' ' + num + ' ' + '=' + ' ' + res3
    document.getElementById("pr4").innerHTML = discount
    document.getElementById("pr5").innerHTML = total

    if (total === 0) {
        document.getElementById("ferror").innerHTML = "Please select any 1 food"
    } else {
        document.getElementById("ferror").innerHTML = ""
        document.getElementById("bill").style.display = "block"
    }


}
