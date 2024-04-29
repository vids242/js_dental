class shape {
    constructor (){

    }
    getArea(){
        throw new Error("implentions of abstracts method is not available.")
    }
}
class Circle extends shape {
    redius;


    constructor(r){
        super()
        this.redius = r;
    }
    getArea(){
        console.log("Circle Area is : ",3.14*this.redius*this.redius);
    }
}
class Rectangle extends shape {
    length;
    width;

    constructor(l,w){
        super();
        this.length = l
        this.width = w
    }
    getArea(){
        console.log("Rectangle Area Is :",this.length*this.width);
    }
}

// const s = new shape();
// s.getArea()

const c = new Circle(22.2);
c.getArea()

const r = new Rectangle(10,12);
r.getArea()

