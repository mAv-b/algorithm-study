/*
    Input: A sequence of 'n' numbers (a_1,a_2,a_3,...,a_n), in form of a array.
    Output: A permutation of these 'n' numbers (a_j,a_k,...,a_i), such that is a 
    ordered version of this sequence of 'n' numbers. The output is a array.
*/

//method is the insertion approach.

function sortSequence(arr){
    for(let i=1 ; i<arr.length; i++){
        const actual = arr[i];
        let j = i-1;
        while(j>=0 && actual < arr[j]){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = actual;
    }
    return arr;
}


console.log(sortSequence(
    [
        30, 79, 40, 8, 38, 56, 52, 59, 16, 40, 74, 62, 90, 79, 8, 28, 87, 98, 70,
        91, 21, 42, 2, 47, 46, 75, 37, 78, 48, 57, 43, 54, 53, 42, 95, 14, 11, 69,
        48, 29, 94, 10, 85, 12, 90, 43, 95, 79, 69, 40, 88, 8, 65, 24, 43, 43, 71,
        48, 44, 66, 68, 13, 91, 79, 83, 37, 82, 16, 20, 96, 67, 40, 61, 96, 32, 64,
        40, 54, 84, 100, 37, 63, 93, 29, 9, 51, 4, 99, 3, 82, 4, 79, 94, 69, 6, 52,
        5, 16, 41, 93
    ]
))