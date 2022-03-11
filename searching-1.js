const log = console.log;
/*
    Input:A sequence of 'n' numbers, and a value 'v'.
    Output: a index of the item, such that v=arr[i], or NIL if doesn't exist such
    item.
*/

function search(arr, v){
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === v)return i;
        else continue;
    }
    return null;
}

log(
    search(
        [1,2,3,4,10,20,15,19,4,99], 15
    )
);