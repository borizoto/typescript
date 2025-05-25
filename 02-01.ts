// Write a function that receives a number and prints the equivalent day of the week
// The input comes as a single number argument.
// Avoid using conditional statements like if…else and switch to determine the Day, instead try using an enum.

function dayWeek(dayAsNum: number) : void {
    enum Days {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    
    console.log(Days[dayAsNum] || 'error')
}

dayWeek(2)
dayWeek(5)
dayWeek(-1)