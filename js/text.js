function hendaltex() {
    event.preventDefault();

    let salary = parseFloat(document.getElementById("salary").value);

    let s1 = 0, s2 = 0, s3 = 0, s4 = 0, s5 = 0, s6 = 0;

    if (salary >= 0 && salary <= 300000) {
        s1 = 0, s2 = 0, s3 = 0, s4 = 0, s5 = 0, s6 = 0;
    } else if (salary >= 300000 && salary <= 600000) {
        s1 = 0,
            s2 = (salary - 300000) * 0.05,
            s3 = 0, s4 = 0, s5 = 0, s6 = 0;
    } else if (salary >= 600000 && salary <= 900000) {
        s1 = 0,
            s2 = 300000 * 0.05,
            s3 = (salary - 600000) * 0.10,
            s4 = 0, s5 = 0, s6 = 0;
    } else if (salary >= 900000 && salary <= 1200000) {
        s1 = 0,
            s2 = 300000 * 0.05,
            s3 = 300000 * 0.10,
            s4 = (salary - 900000) * 0.15,
            s5 = 0, s6 = 0;
    } else if (salary >= 1200000 && salary <= 1500000) {
        s1 = 0,
            s2 = 300000 * 0.05,
            s3 = 300000 * 0.10,
            s4 = 300000 * 0.15,
            s5 = (salary - 1200000) * 0.20,
            s6 = 0;
    } else if (salary >= 1500000) {
        s1 = 0,
            s2 = 300000 * 0.05,
            s3 = 300000 * 0.10,
            s4 = 300000 * 0.15,
            s5 = 300000 * 0.20,
            s6 = (salary - 1500000) * 0.20;
    }

    document.getElementById("slab-1").innerHTML = s1;
    document.getElementById("slab-2").innerHTML = s2;
    document.getElementById("slab-3").innerHTML = s3;
    document.getElementById("slab-4").innerHTML = s4;
    document.getElementById("slab-5").innerHTML = s5;
    document.getElementById("slab-6").innerHTML = s6;

    document.getElementById("ans").innerHTML = s1 + s2 + s3 + s4 + s5 + s6;


}