const tcs = 1; const tcc = 500;
const fis = 2; const fic = 1500;
const rcts = 4; const rctc = 2500;
const rcs = 6; const rcc = 12000;
const brs = 12; const brc = 35000;

let seating = 0; let costing = 0; treatment;

function hendaltreat() {
    let treat = document.getElementById("treatment").value

    if (treat == 0) {
        document.getElementById("disp").style.display = 'none'
    } else {
        document.getElementById("disp").style.display = 'block'

        if (treat === 'tc') {
            treatment = 'Teeth Cleaning'
            seating = tcs
            costing = tcc
        } else if (treat === 'fi') {
            treatment = 'Fillings'
            seating = fis
            costing = fic
        } else if (treat === 'rct') {
            treatment = 'Root Canal Tretment'
            seating = rcts
            costing = rctc
        } else if (treat === 'rc') {
            treatment = 'RCT + Cover'
            seating = rcs
            costing = rcc
        } else if (treat === 'br') {
            treatment = 'Braces'
            seating = brs
            costing = brc
        }
    }

    document.getElementById("tre").innerHTML = treatment
    document.getElementById("set").innerHTML = seating
    document.getElementById("cost").innerHTML = costing


}

function hendalapt() {
    event.preventDefault()
    // console.log('ffgrg');

    let apt_date = document.getElementById("apt_date").value
    // console.log(apt_date);

    let d = new Date(apt_date);
    // console.log(d);


    let print = '';

    print = print + '<table border="1"><tr><th>Tretment</th><th>Seating</th><th>cost</th> </tr>'

    for (let i = 0; i < seating; i++) {
        print = print + '<tr>'
        if (i === 0) {
            print = print + '<td rowspan=' + seating + '>';
            print = print + treatment;
            print = print + '</td>';
        }
        print = print + '<td>' + d.toLocaleDateString() + '</td>'
        print = print + '<td>' + Math.ceil((costing / seating)) + '</td>'
        print = print + '</tr>'

        d.setDate(d.getDate() + 7)

    }

    print = print + '</table>'

    document.getElementById("disptab").innerHTML = print

    let da = document.dentalForm.apt_date.value;
    if (da === '') {
        document.getElementById("dateErr").innerHTML = "Please selecte Your date."
        document.getElementById("disptab").style.display = 'none'
        
    } else {
        document.getElementById("dateErr").innerHTML = ""
        document.getElementById("disptab").style.display = 'inline-block'
    }
}