const log = console.log;
/*
    Consider a sequence of 'n' numbers, we make a initial process, to divide this sequence 
    in 'b' subsequences, such that will be b=2, for this topic, and sort this 'b' 
    sequences. Our goal is merge this 'b' sequences into the original sequence, sorting
    the sequence, with the b sorted sequences.

    Input: The 'n' sequence numbers, in form the array.
    Output: Sorted array of this 'n' sequence numbers.
*/

function mergeSort(ar){
    const n1 = Math.floor(ar.length/2);
    const n2 = ar.length - Math.floor(ar.length/2);
    const ar1 = new Array(n1+1), ar2= new Array(n2+1);
    for(let i=0; i<n1; i++){
        ar1[i] = ar[i];
    }
    for(let i=0; i<n2; i++){
        ar2[i] = ar[i+Math.floor(ar.length/2)];
    }
    //sorting process for this 2 arrays...
    ar1[n1] = Infinity, ar2[n2] = Infinity;
    let i1=0, i2=0;
    for(let i=0; i<ar.length; i++){
        if(ar1[i1] < ar2[i2]){
            ar[i] = ar1[i1];
            i1++;
        }
        else {
            ar[i] = ar2[i2];
            i2++;
        }
    }
    return ar;
}

log(
    mergeSort(
        [1,3,10,20,1,1,2,4,7]
    )
)