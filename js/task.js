let fess, cgpa, grade, scholarship, cast;

console.log("Enter the fees and cast and cgpa: ");

fess = parseInt(prompt("Please enter your fees: ", 0));
cast = (prompt("Please enter your cast: ", 1));
cgpa = parseFloat(prompt("Please enter your cgpa: ", 2));

if (cgpa >= 9) {
    grade = 'A';
} else if (cgpa >= 8.5) {
    grade = 'B';
} else if (cgpa >= 8) {
    grade = 'C';
} else if (cgpa >= 7.5) {
    grade = 'D';
} else {
    grade = 'E'
}

if (grade == 'A' || grade == 'B') {
    if (cast == 'O' || cast == 'o') {
        scholarship = 0;
    } else if (cast == 'B' || cast == 'b') {
        scholarship = fess * 0.25;
    } else if (cast == 'S' || cast == 's') {
        scholarship = fess * 0.50;
    } else if (cast == 'T' || cast == 't') {
        scholarship = fess * 1.00;
    }
} else {
    console.log("Sorry, you are not eligible.");
}

console.log("Your scholarship is: ", scholarship);