function add(price1 , price2){
    const total = price1 + price2;
   return total;
}

const bill = add(100, 200);
console.log('Total bill is', bill);


console.log('------------------');
function add2(price1 , price2){
    return price1 + price2;
}

const bill2 = add2(1045960, 200);
console.log('Total bill is', bill2);

console.log('------------------');

function doMath(num1, num2, ){
const sum = num1 + num2;
console.log('Sum of the two numbers is', sum);

console.log('------------------');
const diff = num1 - num2;
console.log('Difference of the two numbers is', diff);

console.log('------------------');
const multiply = sum * diff;
console.log('Multiplication of sum and difference is', multiply);

console.log('------------------');
const result = multiply / 2;
return result;   
}

const result = doMath(100, 50);
console.log('Output of doMath is',result); 

console.log('------------------');

