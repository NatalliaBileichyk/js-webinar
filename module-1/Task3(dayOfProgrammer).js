function dayOfProgrammer(year) {

const numberOfDays = 256
const daysWithoutFebruary = 31 + 31 + 30 + 31 + 30 + 31 + 31;
let month = Math.trunc(numberOfDays / 31) + 1;

let day;
let dayOfProgrammer;


// the Julian calendar
if (1700 <= year && year <= 1917) {
    // leap or not leap year
    if (year % 4 == 0) {
        //year = "LeapYearJul"
        day = numberOfDays - daysWithoutFebruary - 29 
    } else {
        //year = "NotLeapYearJul"
        day = numberOfDays - daysWithoutFebruary - 28
    }

// the Gregorian calendar
} else if (1919 <= year && year <= 2700){
    // leap or not leap year
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 > 0)) {
        //year = "LeapYearGreg"
        day = numberOfDays - daysWithoutFebruary - 29
    } else {
        //year = "NotLeapYearGreg"
        day = numberOfDays - daysWithoutFebruary - 28
    }

// 1918 year
} else if (year == 1918){
    // (31 + 30 + 31 + 30 + 31 + 31 + 30 + 31) - mart till october + 15 - first days of February
    day = numberOfDays - (31 + 30 + 31 + 30 + 31 + 31 + 30 + 31) + 15
    
// other years
} else { year = "unknown period" }
 
dayOfProgrammer = day + ".0" + month + "." + year
// return console.log("year:" + " " + year)
return console.log("dayOfProgrammer:" + " " + dayOfProgrammer)
// let dayOfProgrammer = dd + "." + mm + "." + year;
// return dayOfProgrammer

}
dayOfProgrammer(1720);
dayOfProgrammer(1701);
dayOfProgrammer(1918);
dayOfProgrammer(1984);
dayOfProgrammer(1985);
dayOfProgrammer(2001)
dayOfProgrammer(2024)
dayOfProgrammer(2023)
dayOfProgrammer(1918)