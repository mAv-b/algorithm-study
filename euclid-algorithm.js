const log = console.log;
const arguments = process.argv.slice(2).map(k => Number(k));

/*
    Wrote the euclid algorithm for find the mdc of two integers input, the output is the mdc of
    this two numbers.
*/

function euclid_algorithm(num1,num2){
    let number,divisor;
    if(num1>num2){
        number = num1;
        divisor = num2;
    }else{
        number = num2;
        divisor = num1;
    }
    while(divisor > 1 && number%divisor !==0){
        const arr = [divisor,number%divisor];
        number = arr[0];
        divisor = arr[1];
    }
    return divisor;
}

log(euclid_algorithm(...arguments));