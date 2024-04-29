// (A) MOUSE :=

// 1) onclick => when mouse click on an element. 

// 2) onmouseover => when the cursor pf the mouse comes over the element. 

// 3) onmouseout => when the cursor of the mouse leaves an element.

// 4) onmousedown => when the mouse button is pressed over the element.

// 5) onmouseup => when the mouse button is relrased over the element.

// 6) onmousemove => when the mouse movement takes place.


// (B) KEYBOARD :=

//1) onkeydown & onkeyup => when the user press and then release the key.



//(C) FROM :=

//1) onfocus => when the user focuses on an element.

//2) onsubmit => when the user submits the form.

//3) onblur => when the focus is away from a from element.

//4) onchange => when the user modifies or changes the value of a element.



//(D) WINDOW / DOCUMENT :=

//1) onload => when the browser finishes loading of the page.

//2) onunload => when the visitor leaves the current webpage, the browers unload it.

//3) onresize => when the visitor reasies the window of the browser.


// *********************************************************

const handleclick = () => {
    console.log("clicked"); // click kara pachi
}

const handleover = () => {
    console.log("clicked"); // mouse button par lay gya pachi
}

const handleout = () => {
    console.log("clicked"); // mouse button parathi hatavya pachi
}

const handledown = () => {
    console.log("clicked"); //  click kara pachi
}

const handleup = () => {
    console.log("clicked"); //  click kara pachi
}

//*********************

const handlekup = () => {
    let val =  document.getElementById("name").value

    console.log(val);  //entre kara pachi
}

const handlekdown = () => {
    let val =  document.getElementById("name").value

    console.log(val);  //entre ni sathe sathe
}

//*********************

const handlesubmit = () => {
    console.log("meet"); // form submit kara pachi
}

const handlefocus = () => {
    document.getElementById("email").style.backgroundColor = "red"; //focus karava mate
}

const handleblur = () => {
    document.getElementById("email").style.backgroundColor = "white"; //bar lay jaye tyare blur  karava mate
}

const handlechange = () => {
   let c1 = document.getElementById("country").value

    console.log(c1); // change kariye tyare..
}


//*********************

window.onload = function () {
    console.log("xyz");  //loard kariye tyare(refrace)
}

window.onunload = function () {
      //close  kariye tyare automatice 
}

window.onresize = function() {
    console.log("mnp", ); //size janva mate
}