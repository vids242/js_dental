let update = null;

const hendaldelet = (id) => {
    let localData = JSON.parse(localStorage.getItem("employee"))

    console.log(id);

    let index = localData.findIndex((v) => v.id === id)
    console.log(index);

    localData.splice(index, 1)
    localStorage.setItem("employee", JSON.stringify(localData));

    displayemployees()
}

const hendalupdate = (id) => {
    // console.log(id);
    let localData = JSON.parse(localStorage.getItem("employee"))

    let index = localData.findIndex((v) => v.id === id)

    // console.log(index,localData[index].name);

    document.employee.name.value = localData[index].name
    document.employee.salary.value = localData[index].salary
    update = index


}

const displayemployees = () => {
    let localData = JSON.parse(localStorage.getItem("employee"))

    let print = ''

    print += '<table>'


    print += '<tr><th>Name</th><th>Salary</th><th>Action</th></tr>'

    localData.map((v, i) => {
        print += `<tr><td>${v.name}</td><td>${v.salary}</td><td><button onclick = "hendalupdate(${v.id})">E</button><button onclick = "hendaldelet(${v.id})">X</button></td></tr>`
    })


    print += '</table>'

    document.getElementById("display").innerHTML = print
}

const hendaldisp = () => {
    event.preventDefault();
    let localData = JSON.parse(localStorage.getItem("employee"));

    const name = document.employee.name.value;
    const salary = document.employee.salary.value;

    let obj = {
        id: Math.ceil(Math.random() * 1000),
        name,
        salary: parseInt(salary),
    }


    if (update !== null || update === 0) {
        localData[update] = obj
        localStorage.setItem("employee", JSON.stringify(localData));
        update = null
    } else {
        if (localData === null) {
            localStorage.setItem("employee", JSON.stringify([obj]));
        } else {
            localData.push(obj);
            localStorage.setItem("employee", JSON.stringify(localData));
        }
    }

    document.employee.name.value = ''
    document.employee.salary.value = ''

    displayemployees()
}

let formRef = document.employee;
formRef.addEventListener("submit", hendaldisp);
window.onload = displayemployees

