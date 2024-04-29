class Budget {
    constructor() {
        this.budgetInput = document.getElementById("budgetInput");
        this.budgetAmt = document.getElementById("budget_card");
        this.expenseAmt = document.getElementById("expenses_card");
        this.BalAmt = document.getElementById("balance_card");

    }


    handleBudgetData() {
        event.preventDefault();

        let budget = JSON.parse(localStorage.getItem("budget"));

        let expenseAmt = JSON.parse(localStorage.getItem("expense"));


        if (!(budget === null)) {
            document.getElementById("budget_card").innerHTML = budget;
        }

        if (!(expenseAmt === null)) {
            let ExpenAmt = expenseAmt.reduce((acc, v) => acc + parseInt(v.amount), 0);
            document.getElementById("expenses_card").innerHTML = ExpenAmt;
            document.getElementById("balance_card").innerHTML = budget - ExpenAmt;

        }



    }

    handleBudgetSubmit() {
        event.preventDefault();


        console.log("gfhbvn", this.budgetInput.value);

        if (this.budgetInput.value === '') {
            document.getElementById("budgetError").innerHTML = "Please enter Budget.";
        } else {
            if (isNaN(this.budgetInput.value) || this.budgetInput.value <= 0) {
                document.getElementById("budgetError").innerHTML = "Please enter valid Budget.";
                // console.log("Yes");
            } else {
                document.getElementById("budgetError").innerHTML = "";

                localStorage.setItem("budget", JSON.stringify(this.budgetInput.value));
                this.handleBudgetData();
            }
        }

        this.budgetInput.value = '';

    }

}

class Expense extends Budget {
    constructor() {
        super()
        this.expenseInput = document.getElementById("expenseInput")
        this.amountInput = document.getElementById("amountInput")

        this.update = null;

    }

    expUpdate(obj) {
        //console.log(data);

        // let explist = JSON.parse(localStorage.getItem("expense"));

        this.expenseInput.value = obj.title;
        this.amountInput.value = obj.amount;

        this.update = obj.id;

        this.displayExp();
        this.handleBudgetData();
    }

    expDelet(id) {
        //console.log(id);

        let explist = JSON.parse(localStorage.getItem("expense"));

        let Fdata = explist.filter((v) => v.id !== id);

        localStorage.setItem("expense", JSON.stringify(Fdata));

        this.displayExp();
        this.handleBudgetData();

    }


    displayExp() {

        event.preventDefault();

        let explist = JSON.parse(localStorage.getItem("expense"));

        if (explist) {
            let extab = document.getElementById("ExpeTab");

            extab.innerHTML = '';

            explist.map((v) => {
                let TrEle = document.createElement("tr");

                let expid = document.createElement("td");
                let expidit = document.createTextNode(v.id);
                expid.appendChild(expidit);

                let expTi = document.createElement("td");
                let expTit = document.createTextNode(v.title);
                expTi.appendChild(expTit);

                let expAm = document.createElement("td");
                let expAmT = document.createTextNode(v.amount);
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

                TrEle.appendChild(expid);
                TrEle.appendChild(expTi);
                TrEle.appendChild(expAm);
                TrEle.appendChild(expAcD);
                TrEle.appendChild(expAcU);

                extab.appendChild(TrEle);
            })
        }

    }

    handleExpenseSubmit() {
        event.preventDefault();
        console.log("vnbhj", this.expenseInput.value, this.amountInput.value);

        let expNmE = true;
        let expAmE = true;

        if (this.expenseInput.value === '') {
            document.getElementById("exp_nmError").innerHTML = "Please enter expense name.";
        } else {
            document.getElementById("exp_nmError").innerHTML = "";
            expNmE = false;
        }

        if (this.amountInput.value === '') {
            document.getElementById("exp_amError").innerHTML = "Please enter Expense  value.";
        } else {
            if (isNaN(this.amountInput.value) || parseInt(this.amountInput.value) <= 0) {
                document.getElementById("exp_amError").innerHTML = "Please enter valid Expense.";
                // console.log("Yes");
            } else {
                // if (this.budgetInput.value <= 0) {
                //     document.getElementById("exp_amError").innerHTML = "Please enter valid Expense.";
                // } else {
                    
                //     this.handleBudgetData();
                // }
                document.getElementById("exp_amError").innerHTML = "";
                expAmE = false;
                
            }

        }


        if (!(expNmE || expAmE)) {

            let expense = JSON.parse(localStorage.getItem("expense"));

            let obj = {
                id: Math.floor(Math.random() * 1000),
                title: this.expenseInput.value,
                amount: this.amountInput.value

            }

            if (this.update) {
                
                let index = expense.findIndex((v) => v.id === this.update);

                expense[index] = obj;

                localStorage.setItem("expense", JSON.stringify(expense));

                this.update = null;

            } else {
               
                //console.log(expense, obj);

                if (expense) {
                    expense.push(obj);
                    localStorage.setItem("expense", JSON.stringify(expense));
                } else {
                    localStorage.setItem("expense", JSON.stringify([obj]));
                }


            }
            this.handleBudgetData();
            this.displayExp();  
        }
        this.expenseInput.value = '';
        this.amountInput.value = '';
    }
}



const b = new Budget();

const budgetSubmit = document.getElementById("budgetForm")
budgetSubmit.addEventListener("submit", function () {

    b.handleBudgetSubmit();
})

const e = new Expense()

const expenseForm = document.getElementById("expenseForm")
expenseForm.addEventListener("submit", function () {
    e.handleExpenseSubmit();
})

window.onload = function () {
    b.handleBudgetData();

    e.displayExp();

}