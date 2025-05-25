"use strict";
// Write a function that receives a number and prints the equivalent day of the week
// The input comes as a single number argument.
// Avoid using conditional statements like if…else and switch to determine the Day, instead try using an enum.
function dayWeek(dayAsNum) {
    let Days;
    (function (Days) {
        Days[Days["Monday"] = 1] = "Monday";
        Days[Days["Tuesday"] = 2] = "Tuesday";
        Days[Days["Wednesday"] = 3] = "Wednesday";
        Days[Days["Thursday"] = 4] = "Thursday";
        Days[Days["Friday"] = 5] = "Friday";
        Days[Days["Saturday"] = 6] = "Saturday";
        Days[Days["Sunday"] = 7] = "Sunday";
    })(Days || (Days = {}));
    console.log(Days[dayAsNum] || 'error');
}
dayWeek(2);
dayWeek(5);
dayWeek(-1);
//# sourceMappingURL=02-01.js.map