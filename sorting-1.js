const log = console.log;

/*
    Input: a sequence of 'n' numbers (a_1,a_2,a_3,...,a_n).
    Output: a permutation of these 'n' numbers (a_i,a_k,...,a_j), such that 
    a_i<=a_k<=...<=a_j.
*/

//input is a array of numbers.

// ----------------APPROACH 1
// function sortSequence(input){
//     for(let i = 0; i<(input.length-1); i++){
//         for(let j = 0; j<=i; j++){
//             if(input[i-j] <= input[i+1-j]){
//                 continue;
//             }else{
//                 const a = input[i-j],b = input[i+1-j];
//                 input[i-j] = b, input[i+1-j] = a;
//             }
//         }
//     }
//     return input;
// }

//------------------APPROACH 2
// function sortSequence(input){
//     for(let i = 0; i<input.length-1; i++){
//         for(let j = 0; j<input.length-1; j++){
//             if(input[j] <= input[j+1]){
//                 continue;
//             }else{
//                 const a = input[j],b = input[j+1];
//                 input[j] = b, input[j+1] = a;
//             }
//         }
//     }
//     return input;
// }


log(
    sortSequence([
        30, 79, 40, 8, 38, 56, 52, 59, 16, 40, 74, 62, 90, 79, 8, 28, 87, 98, 70,
        91, 21, 42, 2, 47, 46, 75, 37, 78, 48, 57, 43, 54, 53, 42, 95, 14, 11, 69,
        48, 29, 94, 10, 85, 12, 90, 43, 95, 79, 69, 40, 88, 8, 65, 24, 43, 43, 71,
        48, 44, 66, 68, 13, 91, 79, 83, 37, 82, 16, 20, 96, 67, 40, 61, 96, 32, 64,
        40, 54, 84, 100, 37, 63, 93, 29, 9, 51, 4, 99, 3, 82, 4, 79, 94, 69, 6, 52,
        5, 16, 41, 93
    ])
);