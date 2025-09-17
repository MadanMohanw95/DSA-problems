const mergeSortedArray = (arr1, arr2) => {
    if (!arr1 && !arr2)
        return []

    if (!arr1 && arr1.length === 0)
        return arr2

    if (!arr2 && arr2.length === 0) 
        return arr1

    let res = []

    const arr1len = arr1.length - 1;
    const arr2len = arr2.length - 1;
    left = 0;
    right = 0;

    mergeToPush(res, left, right, arr1len, arr2len, arr1, arr2);

    return res
}

const mergeToPush = (res, left, right, arr1Len, arr2Len, arr1, arr2) => {
    while ((left <= arr1Len) && (right <= arr2Len)) {
            if (arr1[left] < arr2[right]) {
                res.push(arr1[left])
                left++;
            } else if (arr1[left] > arr2[right]) {
                res.push(arr2[right])
                right++;
            } else {
                res.push(arr1[left]);
                res.push(arr2[right]);
                left++;
                right++;
            }
    }
    while (left < arr1.length) res.push(arr1[left++]);
    while (right < arr2.length) res.push(arr2[right++]);
}

// const arr1 = [0,2,3,5,5,7,8]
// const arr2 = [0,1,2,2,3,4,5,6,7,8]
const arr1 = [1, 3, 5]
const arr2 = [1, 2, 3, 4, 5, 6]

console.log(mergeSortedArray(arr1, arr2))