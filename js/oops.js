class Bulding {
    // It is called when object is created. It is used to set initial value of claas
    constructor(w, l) {
        this.width = w;  //properties 
        this.length = l;
    }
    // Method or Behavior
    area() {
        let area;
        area = this.width * this.length
        console.log("Bulding area is : " + area);
    }
}
// Object 
// const b1 = new Bulding(100, 200)
// b1.area();

// const b2 = new Bulding(200, 200);
// b2.area();



class Student {
    constructor(rl, n, f) {
        this.rolln = rl,
            this.name = n
        this.fees = f;
    }
    Infometion() {
        console.log("Roll_no : " + this.rolln);
        console.log("Student Name :" + this.name);
        console.log("Fees : " + this.fees);
    }
    Discount() {
        let discount
        discount = this.fees * 0.10

        let total_fee
        total_fee = this.fees - discount

        console.log("Your Discount Is :" + discount);
        console.log("Total Fees Is :" + total_fee);
    }
}
const A1 = new Student(21, "Vraj", 10000)
// A1.Infometion()
// A1.Discount()



// perent claas 
class Employ {
    constructor(n, d) {
        this.name = n;
        this.doj = d;
    }
    info () {
        console.log("Name Is :",this.name);
        console.log("Date Of Joining : ",this.doj);
    }
}
// childe claas 
class Salary  extends Employ {
    constructor (n,d,s) {
        super(n,d)
        this.salary = s
    }
    Salaryinfo () {
        console.log("Salary Is ",this.salary);
    }
}
const e1 = new Salary("amit","02-01-2024",10000)
// e1.info()
// e1.Salaryinfo()