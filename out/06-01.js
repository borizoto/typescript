"use strict";
// Write a function that prints a number between 1 and 7 when a day of the week is passed to it as a string and an
// error message if the string is not recognized.
// • The input comes as a single-string argument.
// • Avoid using conditional statements like if...else and switch to get the number, instead try using an enum.
function reverseDayWeek(dayAsStr) {
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
    console.log(Days[dayAsStr] || 'error');
}
reverseDayWeek('Monday');
reverseDayWeek('Friday');
reverseDayWeek('Invalid');
//# sourceMappingURL=06-01.js.map