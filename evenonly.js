// create a function that will return the only even numbers
//return the sum of even numbers


    function evenNumbersOnly(numbers) {
        const evens = [];
        for(const number of numbers) {
            if (number % 2 === 0) {
                console.log('Even Number:', number);
                evens.push(number);
            }
          
        }
          return evens;
    }

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // const evens = evenNumbersOnly(numbers);
    // console.log('Even Numbers:', evens); // [2, 4, 6, 8, 10]


    function sumOfEvenNumbers(numbers) {
        let sum = 0; 
        for(const number of numbers) {
            if (number % 2 === 0) {
                console.log('Even Number:', number);
                sum += number;
            }
        
        } 
        return sum;
    }
    const sum = sumOfEvenNumbers(numbers);
    console.log('Sum of Even Numbers:', sum); // 30 
