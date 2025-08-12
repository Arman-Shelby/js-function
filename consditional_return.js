function isEven(number){
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log('Is 10 even?', isEven(10)); // true
console.log('Is 15 even?', isEven(15)); // false
console.log('------------------');

function isOdd(number){
    if (number % 2 === 1) {
        return true;
    } else {
        return false;
    }   
}

console.log('Is 10 odd?', isOdd(10)); // false
console.log('Is 15 odd?', isOdd(15)); // true   