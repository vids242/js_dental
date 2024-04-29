class Buget {
    constructor() {
        this.budget_input = document.getElementById("budget_input")
    }

    hendalBugetData() {
        event.preventDefault()
        let buget = JSON.parse(localStorage.getItem("Buget"))
        let expens = JSON.parse(localStorage.getItem("Expense"))

        if (!(buget === null)) {
            document.getElementById("budget-value").innerHTML = "$"+buget;
        }
        if (!(expens === null)) {
            let ExpAmount = expens.reduce((a, v) => a + parseInt(v.expAmt), 0)
            let totalAmt = buget - ExpAmount
            document.getElementById("expense-amt").innerHTML = "$"+ExpAmount
            document.getElementById("balance-value").innerHTML = "$"+totalAmt
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
        this.update = null;
    }

    expUpdate(obj) {
        //console.log(data);

        // let explist = JSON.parse(localStorage.getItem("expense"));

        this.expenseTitle.value = obj.expTit;
        this.expenseValue.value = obj.expAmt;

        this.update = obj.id;

        this.hendalDisplay();
        this.hendalBugetData();
    }

    expDelet(id) {
        //console.log(id);

        let explist = JSON.parse(localStorage.getItem("Expense"));

        let Fdata = explist.filter((v) => v.id !== id);

        localStorage.setItem("Expense", JSON.stringify(Fdata));

        this.hendalDisplay();
        this.hendalBugetData();

    }
    hendalDisplay() {
        event.preventDefault();

        let explist = JSON.parse(localStorage.getItem("Expense"));

        if (explist) {
            let extab = document.getElementById("TabRef");

            extab.innerHTML = '';

            explist.map((v) => {
                let TrEle = document.createElement("tr");



                let expTi = document.createElement("td");
                let expTit = document.createTextNode(v.expTit);
                expTi.appendChild(expTit);

                let expAm = document.createElement("td");
                let expAmT = document.createTextNode(v.expAmt);
                expAm.appendChild(expAmT);


                let expAcD = document.createElement("td");

                let butDe = document.createElement("button");
                butDe.setAttribute("id", "but");
                butDe.addEventListener("click", function () {
                    e.expDelet(v.id);
                })
                let butTxt = document.createTextNode("Delete");
                butDe.appendChild(butTxt);
                expAcD.appendChild(butDe);


                let expAcU = document.createElement("td");
                let butup = document.createElement("button");
                butup.setAttribute("id", "but");
                butup.addEventListener("click", function () {
                    e.expUpdate(v);
                })
                let butUTxt = document.createTextNode("Update");
                butup.appendChild(butUTxt);
                expAcU.appendChild(butup);

                
                TrEle.appendChild(expTi);
                TrEle.appendChild(expAm);
                TrEle.appendChild(expAcD);
                TrEle.appendChild(expAcU);

                extab.appendChild(TrEle);
            })
        }

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
            if (this.update) {

                let index = expense.findIndex((v) => v.id === this.update);

                expense[index] = obj;

                localStorage.setItem("Expense", JSON.stringify(expense));

                this.update = null;

            } else {
                if (expense) {
                    expense.push(obj);
                    localStorage.setItem("Expense", JSON.stringify(expense));
                } else {
                    localStorage.setItem("Expense", JSON.stringify([obj]));
                }
            }


            this.hendalBugetData()
            this.hendalDisplay();
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
    b.hendalBugetData()
    e.hendalDisplay()
}