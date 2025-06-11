// 2. CountableSet<T>
// You are given the generic interface CountableSet<T>, which keeps track of unique items and their count (The set
// shouldn’t keep multiple copies, instead just manage a counter for each item).

// CountableSet<T>
// interface CountableSet<T> {
//     add(item: T): void;
//     remove(item: T): void;
//     contains(item: T): boolean;
//     getNumberOfCopies(item: T): number;
// }

// Your task is to create a class CountedSet<T> that implements the CountableSet<T> interface, using the following logic:
// • add(item:T) – if item T is not in the set – add it and set count to 1, otherwise just increment its counter.
// • remove(item: T) – if item T is not in the set or is but has count 0 – does nothing. If the item is in the set and
// has count > 0, decrement the counter.
// • contains(item: T) – if item exists in the set and has a count > 0 – returns true, otherwise returns false.
// • getNumberOfCopies(item: T) – returns the number of copies of the item in the set, if the item doesn’t exist
// in the set returns 0.

interface CountableSet<T> {
    add(item: T): void;
    remove(item: T): void;
    contains(item: T): boolean;
    getNumberOfCopies(item: T): number;
}

class CountedSet<T> implements CountableSet<T> {
    public items: Map<T, number> = new Map();

    add(item: T): void {
        const count = this.items.get(item);

        if (count) {
            this.items.set(item, count + 1);
        } else {
            this.items.set(item, 1);
        }
    }

    remove(item: T): void {
        const count = this.items.get(item);

        if (count !== undefined && count > 0) {
            this.items.set(item, count - 1);
        }
    }

    contains(item: T): boolean {
        const count = this.items.get(item);

        return count !== undefined && count > 0;
    }

    getNumberOfCopies(item: T): number {
        return this.items.get(item) ?? 0;
    }
}

let countedSet = new CountedSet<string>();
countedSet.add('test');
countedSet.add('test');
console.log(countedSet.items)
console.log(countedSet.contains('test'));
console.log(countedSet.getNumberOfCopies('test'));
countedSet.remove('test')
countedSet.remove('test')
countedSet.remove('test')
console.log(countedSet.getNumberOfCopies('test'));
console.log(countedSet.contains('test'));