"use strict";
// 2. CountableSet<T>
// You are given the generic interface CountableSet<T>, which keeps track of unique items and their count (The set
// shouldn’t keep multiple copies, instead just manage a counter for each item).
class CountedSet {
    items = new Map();
    add(item) {
        const count = this.items.get(item);
        if (count) {
            this.items.set(item, count + 1);
        }
        else {
            this.items.set(item, 1);
        }
    }
    remove(item) {
        const count = this.items.get(item);
        if (count !== undefined && count > 0) {
            this.items.set(item, count - 1);
        }
    }
    contains(item) {
        const count = this.items.get(item);
        return count !== undefined && count > 0;
    }
    getNumberOfCopies(item) {
        return this.items.get(item) ?? 0;
    }
}
let countedSet = new CountedSet();
countedSet.add('test');
countedSet.add('test');
console.log(countedSet.items);
console.log(countedSet.contains('test'));
console.log(countedSet.getNumberOfCopies('test'));
countedSet.remove('test');
countedSet.remove('test');
countedSet.remove('test');
console.log(countedSet.getNumberOfCopies('test'));
console.log(countedSet.contains('test'));
//# sourceMappingURL=02-04.js.map