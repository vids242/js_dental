class Buget {
    constructor() {
        this.budget_input = document.getElementById("budget_input")
    }

    hendalBugetData() {
        event.preventDefault()
        let buget = JSON.parse(localStorage.getItem("Buget"))
        let expens = JSON.parse(localStorage.getItem("Expense"))

        if (!(buget === null)) {
            document.getElementById("budget-value").innerHTML = buget;
        }
        if (!(expens === null)) {
            let ExpAmount = expens.reduce((a, v) => a + parseInt(v.expAmt), 0)
            document.getElementById("expense-amt").innerHTML = ExpAmount
            document.getElementById("balance-value").innerHTML = buget - ExpAmount
        }
    }

    hendalbugetsubmit() {
        event.preventDefault()


        if (this.budget_input.value === '') {
            document.getElementById("bugetErr").innerHTML = "Enter Your Buget"
        } else {
            if (isNaN(this.budget_input.value) || this.budget_input.value <= 0) {
                document.getElementById("bugetErr").innerHTML = "Enter Valid Buget"
            } else {
                document.getElementById("bugetErr").innerHTML = ""

                localStorage.setItem("Buget", JSON.stringify(this.budget_input.value))

                this.hendalBugetData()
            }
        }
        this.budget_input.value = ''
    }

}
class Expense extends Buget {
    constructor() {
        super()
        this.expenseTitle = document.getElementById("expense-title")
        this.expenseValue = document.getElementById("expense-value")
    }

    hendalDelet(id){
        const RefData = document.getElementById(id)
        RefData.remove()

        let fData = RefData.filter((v) => v.id !== id);
        
        localStorage.setItem("Expense",JSON.stringify(fData))

        this.hendalBugetData()
        this.hendalDisplay()
    }
    hendalDisplay(obj) {
        const TabRef = document.getElementById("TabRef")
        const TableR = document.createElement("tr")

        const TabTitle = document.createElement("td")
        const TitleText = document.createTextNode(obj.expTit)
        TabTitle.appendChild(TitleText)

        const TabAmount = document.createElement("td")
        const TabAmountText = document.createTextNode(obj.expAmt)
        TabAmount.appendChild(TabAmountText)

        const Editbtn = document.createElement("button")
        Editbtn.setAttribute("onclick", `hendaledit(${obj.id})`)
        const EditText = document.createTextNode("E")
        Editbtn.appendChild(EditText)

        const Deletbtn = document.createElement("button")
        Deletbtn.addEventListener("click", (obj) => {
            this.hendalDelet(obj)
        })
        const DeletText = document.createTextNode("X")
        Deletbtn.appendChild(DeletText)

        TableR.appendChild(TabTitle)
        TableR.appendChild(TabAmount)
        TableR.appendChild(Editbtn)
        TableR.appendChild(Deletbtn)


        TabRef.appendChild(TableR)

    }

    hendalexpenssubmit() {
        event.preventDefault()

        let ExpTitE = true;
        let ExpAmtE = true;

        if (this.expenseTitle.value === '') {
            document.getElementById("exptitErr").innerHTML = "please enter a title"
        } else {
            document.getElementById("exptitErr").innerHTML = ""
            ExpTitE = false
        }

        if (this.expenseValue.value === '') {
            document.getElementById("expAmtErr").innerHTML = "please enter a Amount"
        } else {
            if (isNaN(this.expenseValue.value) || parseInt(this.expenseValue.value) < 0) {
                document.getElementById("expAmtErr").innerHTML = "please enter a Valid Amount"
            } else {
                document.getElementById("expAmtErr").innerHTML = ""
                ExpAmtE = false
            }
        }




        if (!(ExpTitE || ExpAmtE)) {
            let expense = JSON.parse(localStorage.getItem("Expense"))

            let obj = {
                id: Math.floor(Math.random() * 1000),
                expTit: this.expenseTitle.value,
                expAmt: parseInt(this.expenseValue.value)
            }

            if (expense) {
                expense.push(obj);
                localStorage.setItem("Expense", JSON.stringify(expense));
            } else {
                localStorage.setItem("Expense", JSON.stringify([obj]));
            }

            this.hendalBugetData()
            this.hendalDisplay(obj);
        }
        this.expenseTitle.value = ''
        this.expenseValue.value = ''
    }

}
const b = new Buget()

let bugetamount = document.getElementById("bugetamount")
bugetamount.addEventListener("submit", function () {
    b.hendalbugetsubmit()
})

const e = new Expense()

let expensdata = document.getElementById("expensdata")
expensdata.addEventListener("submit", function () {
    e.hendalexpenssubmit()
})

window.onload = function () {
    e.hendalBugetData()
    b.hendalBugetData()
}