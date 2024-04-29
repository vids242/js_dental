let arr = [];
let update = null;
const hendaldisp = () => {
    let print = '';

    print = print + '<ul>';

    arr.map((v, i) => {
        print = print + `<li>${v}<button onclick=hendaldelet(${i})><i class="fa-solid fa-trash "></i></button><button onclick=hendalupdate('${v}',${i})><i class="fa-regular fa-pen-to-square"></i></button></li>`
    })

    print = print + '</ul>'

    document.getElementById("disp").innerHTML = print
}

const hendaldelet = (index) => {
    arr.splice(index, 1)
    hendaldisp()
}

const hendalupdate = (value, index) => {

    document.getElementById("task").value = value
    update = index;
    console.log(update);

}

const hendaltodo = () => {
    event.preventDefault();
    let val = document.getElementById("task").value;
    if (update !== null || update === 0) {
        arr[update] = val
        document.getElementById("task").value = ''
        update = null

    } else if (val === '') {
        
    } else {
        arr.push(val)
       

    }
    hendaldisp()

    let td = document.todoForm.task.value
    if (td === "") {
        document.getElementById("taskErr").innerHTML = "Please Enter Your Task."
    } else {
        document.getElementById("taskErr").innerHTML = ""
    }


}

// const hendalsearch = () => {
//     let val = document.getElementById("search").value

//     let fData = arr.filter((v) => v.includes(val))

//     hendaldisp(fData);

// }