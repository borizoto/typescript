"use strict";
// Write a function that takes in a single parameter an unknown[], and then:
// • Type narrows each value of the array that is a valid date and falls on a Friday the 13th
// • Prints each date that meets the above requirement in the following format '<day>-<month>-<year>'where
// month is the full name of the month. 
function isRealDate(param) {
    let Months;
    (function (Months) {
        Months[Months["January"] = 0] = "January";
        Months[Months["February"] = 1] = "February";
        Months[Months["March"] = 2] = "March";
        Months[Months["April"] = 3] = "April";
        Months[Months["May"] = 4] = "May";
        Months[Months["June"] = 5] = "June";
        Months[Months["July"] = 6] = "July";
        Months[Months["August"] = 7] = "August";
        Months[Months["September"] = 8] = "September";
        Months[Months["October"] = 9] = "October";
        Months[Months["November"] = 10] = "November";
        Months[Months["December"] = 11] = "December";
    })(Months || (Months = {}));
    for (const element of param) {
        if (element instanceof Date && element.getDay() === 5 && element.getDate() === 13) {
            const day = element.getDate();
            const month = element.getMonth();
            const year = element.getFullYear();
            console.log(`${day}-${Months[month]}-${year}`);
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
]);
// isRealDate([
//     {},
//     new Date(2025, 4, 13),
//     null,
//     new Date(2025, 5, 13),
//     '13-09-2023',
//     new Date(2025, 6, 13),
// ])
//# sourceMappingURL=09-01.js.map