function hendalpc() {
    event.preventDefault()


    let processor = parseInt(document.getElementById("processor").value)
    let ram = parseInt(document.getElementById("ram").value)
    let memory = parseInt(document.getElementById("memory").value)
    let graphic = parseInt(document.getElementById("graphic").value)

    let type = ''

    if (processor == 3000) {
        type = 'student pc'
    } else if (processor == 9000) {
        if (ram >= 4000 && memory >= 6000) {
            type = 'professional pc'
        } else {
            type = 'student pc'
        }
    } else if (processor == 12000) {
        if (ram >= 4000 && memory >= 6000 && graphic > 0) {
            type = 'gaming pc'
        } else if (ram >= 4000) {
            type = 'professional pc'
        } else {
            type = 'student pc'
        }
    }

    let price = processor + ram + memory + graphic
    document.getElementById("price").innerHTML = price
    document.getElementById("pc").innerHTML = type

    let pr = document.PcForm.processor.value
    if (pr === '0') {
        document.getElementById("proErr").innerHTML = "Please selecte Your processor."
    } else {
        document.getElementById("proErr").innerHTML = ""
    }



    let rm = document.PcForm.ram.value
    if (rm === '0') {
        document.getElementById("ramErr").innerHTML = "Please selecte Your ram."
    } else {
        document.getElementById("ramErr").innerHTML = ""
    }



    let me = document.PcForm.memory.value
    if (me === '0') {
        document.getElementById("memoryErr").innerHTML = "Please selecte Your memory card."
    } else {
        document.getElementById("memoryErr").innerHTML = ""
    }


    let gp = document.PcForm.graphic.value
    if (gp === '0') {
        document.getElementById("graphicsErr").innerHTML = "Please selecte Your graphic card."
    } else {
        document.getElementById("graphicsErr").innerHTML = ""
    }

}