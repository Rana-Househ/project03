function calculateGrade(score) {
    if (typeof score !== "number" || score < 0 || score > 100) {
        return "Invalid score";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}


function checkAccess(age, hasTicket) {
if (typeof age !== "number" || age < 0 || typeof hasTicket !== "boolean") {
return false;}
 else if (age >= 18 && hasTicket === true) {
return true;}

 else {
return false;}
}

console.log(calculateGrade(95));
console.log(calculateGrade(87));
console.log(calculateGrade(0));
console.log(calculateGrade(100));
console.log(calculateGrade(-5));
console.log(calculateGrade("99"));

console.log(checkAccess(23, true));
console.log(checkAccess(16, true));
console.log(checkAccess(29, false));
console.log(checkAccess("24", true));
