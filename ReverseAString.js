const reverseAStringWithFor = (str) => {
    let resStr = []
    const strArr = str.split('');
    for (let i=strArr.length-1; i>=0;i--) {
        resStr.push(strArr[i])
    }
    const res = resStr.join('')
    return res
}

const reverseAString = (str) => {
    if (!str || str.length === 0) {
        return '';
    }
    const strArr = str.split('');
    let left = 0;
    let right = strArr.length - 1;

    while (left < right) {
        const temp = strArr[left];
        strArr[left] = strArr[right];
        strArr[right] = temp;
        left++;
        right--;
    }

    return strArr.join('');
}


console.log(reverseAString('i am madan'));