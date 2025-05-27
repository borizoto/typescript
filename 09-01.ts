// Write a function that takes in a single parameter an unknown[], and then:
// • Type narrows each value of the array that is a valid date and falls on a Friday the 13th
// • Prints each date that meets the above requirement in the following format '<day>-<month>-<year>'where
// month is the full name of the month. 

function isRealDate(param: unknown[]): void {
    enum Months {
        January,
        February,
        March,
        April,
        May,
        June,
        July,
        August,
        September,
        October,
        November,
        December
    }

    for (const element of param) {
        if (element instanceof Date && element.getDay() === 5 && element.getDate() === 13) {
            const day = element.getDate();
            const month = element.getMonth();
            const year = element.getFullYear();
            console.log(`${day}-${Months[month]}-${year}`)
        }
    }
}

isRealDate([
    new Date(2024, 0, 13),
    new Date(2024, 1, 13),
    new Date(2024, 2, 13),
    new Date(2024, 3, 13),
    new Date(2024, 4, 13),
    new Date(2024, 5, 13),
    new Date(2024, 6, 13),
    new Date(2024, 7, 13),
    new Date(2024, 8, 13),
    new Date(2024, 9, 13),
    new Date(2024, 10, 13),
    new Date(2024, 11, 13)
])

// isRealDate([
//     {},
//     new Date(2025, 4, 13),
//     null,
//     new Date(2025, 5, 13),
//     '13-09-2023',
//     new Date(2025, 6, 13),
// ])