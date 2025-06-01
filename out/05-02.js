"use strict";
function visitFloor(floor) {
    switch (floor.number) {
        case 1:
            floor.train();
            return;
        case 2:
            floor.dine();
            return;
        case 3:
            floor.sleep();
            return;
    }
}
// function visitFloor(floor: simplified) {
//     switch (floor.number) {
//         case 1: floor.train(); return;
//         case 2: floor.dine(); return;
//         case 3: floor.sleep(); return;
//     }
// }
console.log(visitFloor({ train() { }, number: 1, hallway: 'A', pass: 'Guest' }));
console.log(visitFloor({ dine() { }, number: 2, hallway: 'A' }));
console.log(visitFloor({ sleep() { }, number: 3, hallway: 'C' }));
console.log(visitFloor({ train() { }, number: 1, hallway: 'C' }));
console.log(visitFloor({ train() { }, number: 1, hallway: 'A' }));
console.log(visitFloor({ dine() { }, number: 2, hallway: 'A', pass: 'Guest' }));
//# sourceMappingURL=05-02.js.map