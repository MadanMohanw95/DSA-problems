const firstRecurringItem = (arr) => {
    if (arr === null || arr === undefined) {
        return -1
    }
    const set = new Set();
    for (let i of arr) {
        if (!set.has(i)) {
            set.add(i);
        } else {
            return i;
        }
    }
}

console.log(firstRecurringItem([5,3,3,2]))
