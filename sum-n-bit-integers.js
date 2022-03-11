const log = console.log;
/*
    Input: Two n-bit integer number, each in a n-element array.
    Output: The sum of this two n-bit numbers, in a (n+1)-element array.
*/

function nBitSum(a, b){
    const arr = new Array(a.length);
    let c = 0;
    for(let i = a.length-1; i>=0; i--){
        arr[i+1] = (a[i]+b[i]+c)%2;
        c = (a[i]+b[i]+c > 1)? 1:0;
    }
    arr[0] = 1;
    return arr;
}

log(
    nBitSum(
        [1,1,1,0,0,1,0,1,0,0,1,1,0,1],[1,1,1,0,0,1,0,1,0,0,1,1,0,1]
    )
)