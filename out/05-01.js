"use strict";
function summarizePerson(id, firstName, lastName, age, middleName, hobbies, workInfo) {
    const fullName = middleName ? `${firstName} ${middleName} ${lastName}` : `${firstName} ${lastName}`;
    const hobbiesStr = hobbies ? hobbies.join(', ') : '-';
    const workInfoStr = workInfo ? `${workInfo[0]} -> ${workInfo[1]}` : '-';
    return [
        id,
        fullName,
        age,
        hobbiesStr,
        workInfoStr
    ];
}
console.log(summarizePerson(12, 'Eliot', 'Des', 20, 'Braylen', ['tennis', 'football', 'hiking'], ['Sales Consultant', 2500]));
console.log(summarizePerson(20, 'Mary', 'Trent', 25, undefined, ['fitness', 'rowing']));
console.log(summarizePerson(21, 'Joseph', 'Angler', 28));
//# sourceMappingURL=05-01.js.map