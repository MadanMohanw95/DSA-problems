var arr1 = ['a', 'b', 'c', 'x']
var arr2 = ['z', 'y', 'i']
// should return false

var arr3 = ['a', 'b', 'c', 'x']
var arr4 = ['z', 'y', 'x']
// should return true

const commonItem = (arr3, arr4) => {
    if (!arr3 || !arr4 || arr3.length === 0 || arr4.length === 0)  {
        return false;
    }

    const set1 = new Set(arr3);

    for (let char of arr4) {
        if (set1.has(char)) {
            return true;
        }
    }

    return false;
}


const commonItemUsingObject = (arr1, arr2) => {
    let map = Object.create(null);
    for (let item of arr1) {
        if (!map[item]) {
            map[item] = true;
        }
    }

    for (let item of arr2) {
        if (map[item]) {
            return true;
        }
    }
    return false;
}

console.log(commonItem(arr3, arr4))
console.log(commonItemUsingObject(arr1, arr2))