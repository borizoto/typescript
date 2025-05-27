// Write a function that prints a number between 1 and 7 when a day of the week is passed to it as a string and an
// error message if the string is not recognized.
// • The input comes as a single-string argument.
// • Avoid using conditional statements like if...else and switch to get the number, instead try using an enum.

function reverseDayWeek(dayAsStr: string): void {
    enum Days {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    console.log(Days[dayAsStr as keyof typeof Days] || 'error')
}

reverseDayWeek('Monday')
reverseDayWeek('Friday')
reverseDayWeek('Invalid')