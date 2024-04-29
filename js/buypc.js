function hendalpc() {
    event.preventDefault()
    let pc

    let ans1 = document.getElementById("processor").value
    let ans2 = document.getElementById("ram").value
    let ans3 = document.getElementById("memory").value
    let ans4 = document.getElementById("graphic").value

    if (ans1 == 'i3') {
        let = price1 = 3000
        pc = "student"
        if (ans2 == '4gb') {
            let = price2 = 2000
            if (ans3 == '256gb') {
                let = price3 = 3000
                if (ans4 == 'yes') {
                    let = price4 = 4500
                } else if (ans4 == 'no') {
                    let = price4 = 0
                }
            } else if (ans3 == '512gb') {
                let = price3 = 6000
                if (ans4 == 'yes') {
                    let = price4 = 4500
                } else if (ans4 == 'no') {
                    let = price4 = 0
                }
            } else if (ans3 == '1tb') {
                let = price3 = 9000
                if (ans4 == 'yes') {
                    let = price4 = 4500
                } else if (ans4 == 'no') {
                    let = price4 = 0
                }
            }
        } else if (ans2 == '8gb') {
            let = price2 = 4000
            if (ans3 == '256gb') {
                let = price3 = 3000
                if (ans4 == 'yes') {
                    let = price4 = 4500
                } else if (ans4 == 'no') {
                    let = price4 = 0
                }
            } else if (ans3 == '512gb') {
                let = price3 = 6000
                if (ans4 == 'yes') {
                    let = price4 = 4500
                } else if (ans4 == 'no') {
                    let = price4 = 0
                }
            } else if (ans3 == '1tb') {
                let = price3 = 9000
                if (ans4 == 'yes') {
                    let = price4 = 4500
                } else if (ans4 == 'no') {
                    let = price4 = 0
                }
            }
        } else if (ans2 == '12gb') {
            let = price2 = 6000
            if (ans3 == '256gb') {
                let = price3 = 3000
                if (ans4 == 'yes') {
                    let = price4 = 4500
                } else if (ans4 == 'no') {
                    let = price4 = 0
                }
            } else if (ans3 == '512gb') {
                let = price3 = 6000
                if (ans4 == 'yes') {
                    let = price4 = 4500
                } else if (ans4 == 'no') {
                    let = price4 = 0
                }
            } else if (ans3 == '1tb') {
                let = price3 = 9000
                if (ans4 == 'yes') {
                    let = price4 = 4500
                } else if (ans4 == 'no') {
                    let = price4 = 0
                }
            }
        }
    }
    
    parseInt(document.getElementById("price").innerHTML = price1+price2+price3+price4)
    document.getElementById("pc").innerHTML = pc
}