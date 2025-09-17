let reverseWords = (str) => {
    if (!str) {
        return ''
    }
    let res = ''

    const splt = str.split(' ');
    for (let word=splt.length-1; word>=0; word--) {
        res+= splt[word] + ' '
    }
    return res
}

console.log(reverseWords('lets go to gym today'));