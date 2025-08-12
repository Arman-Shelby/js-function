//for a given string tell me wheather it has even or odd number of characters.

function evenSizeString(str) {
    const size = str.length;
    if (size % 2 === 0) {
        console.log('Even Size String');
    return true;
    } else {
        console.log('Odd Size String');
        return false;
    }   
    // console.log('String:', str, 'Size: ' ,size);
}

// evenSizeString('Dhaka');
// evenSizeString('Bangladesh');
function doubleOrTriple(number, doDouble) {
    if (doDouble) {
        const result = number * 2;
        return result;
    }
    else {
        const result = number * 3;
        return result;
    }
}

console.log('Double or Triple:', doubleOrTriple(10, true)); // 20
console.log('Double or Triple:', doubleOrTriple(10, false)); // 30  

console.log('------------------');

function numberOfELements(numbers){
    const length = numbers.length;
    return length;
}

numberOfELements([1, 2, 3, 4, 5]); // 5
numberOfELements([10, 20, 30]); // 3

console.log('------------------');

function getAge (person) {
    const age = person.age;
    return age;
}
