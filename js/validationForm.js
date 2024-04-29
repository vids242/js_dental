const validateForm = () => {

    let nameE = true;
    let emailE = true;
    let numberE = true;
    let couE = true;
    let genE = true;
    let hobbiesE = true;




    let name = document.contactForm.name.value
    console.log(name);
    if (name === '') {
        document.getElementById("nameErr").innerHTML = 'Please Enter Full Name'
    } else {
        let regex = /^[a-zA-Z ]{2,30}$/;

        if (regex.test(name)) {
            document.getElementById("nameErr").innerHTML = ''
             nameE = false;
        } else {
            document.getElementById("nameErr").innerHTML = 'Please Enter Valid Full Name'
        }
    }

    let email = document.contactForm.email.value
    console.log(email);
    if (email === '') {
        document.getElementById("emailErr").innerHTML = 'Please Enter Your Email'
    } else {
        let regex = /\S+@\S+\.\S+/;

        if (regex.test(email)) {
            document.getElementById("emailErr").innerHTML = ''
             emailE = false;
        } else {
            document.getElementById("emailErr").innerHTML = 'Please Enter Valid Email'
        }
    }

    let number = document.contactForm.mobile.value
    let numle = number.length
    console.log(numle);
    if (number === '') {
        document.getElementById("mobileErr").innerHTML = 'Please Enter Your Number'
    } else {
        if (isNaN(number)) {
            document.getElementById("mobileErr").innerHTML = 'Please Enter Valid Number'
        } else if (numle > 10 || numle != 10) {
            document.getElementById("mobileErr").innerHTML = 'Please Enter Valid Number'
        } else {
            document.getElementById("mobileErr").innerHTML = ''
             numberE = false;
        }
    }

    let cou = document.contactForm.country.value
    console.log(cou);

    if (cou === '0') {
        document.getElementById("countryErr").innerHTML = 'Please Select Your country'
    } else {
        document.getElementById("countryErr").innerHTML = ''
         couE = false;
    }


    let gen = document.contactForm.gender.value
    //console.log(gen);

    if (gen === "male" || gen === "female") {
        document.getElementById("genderErr").innerHTML = ""
         genE = false;
    } else {
        document.getElementById("genderErr").innerHTML = "Please select  Your gender."
    }


    const hobbies = document.contactForm.hobbies
    console.log(hobbies);

    let hobbiesdata = []

    for (let i = 0; i < hobbies.length; i++) {
        if (hobbies[i].checked) {
            hobbiesdata.push(hobbies[i].value)
        }
    }
    console.log(hobbiesdata);

    if (hobbiesdata.length < 2) {
        document.getElementById("hobbyErr").innerHTML = ' please select minimum 2 value'
    } else {
        document.getElementById("hobbyErr").innerHTML = ""
         hobbiesE = false;
    }

    if (nameE || emailE || numberE || couE || genE || hobbiesE) {
        return false
    } else {
        return true;
    }

}