class MySet {
    constructor(items) {
        this.store = items.reduce((acc, i) => {
            acc[i] = i;

            return acc;
        }, {});
    }

    has(item) {
        return this.store.hasOwnProperty(item);
    }

    add(item) {
        if (this.has(item)) { return; }

        this.store[item] = item;
    }

    delete(item) {
        if (!this.has(item)) { return; }

        delete this.store[item];
    }
}

const set = new MySet([1, 2, 3, 2, 3, 2, 1]);

console.log(set); // MySet { store: { '1': 1, '2': 2, '3': 3 } }
console.log(set.has(4)); // false

set.add(4);
set.add(4);
set.add(4);

console.log(set); // MySet { store: { '1': 1, '2': 2, '3': 3, '4': 4 } }
console.log(set.has(4)); // true

set.delete(4);
set.delete(4);

console.log(set); // MySet { store: { '1': 1, '2': 2, '3': 3 } }
console.log(set.has(4)); // false
