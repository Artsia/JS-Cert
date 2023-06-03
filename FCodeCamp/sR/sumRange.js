/**Return the sum of those two numbers 
 * plus the sum of all the numbers between them. 
 * The lowest number will not always come first.
 *  */


function sumRange(arr) {

    let large = 0, small = 0, sum = 0, total = 0;

    if (arr[0] > arr[1]) {
        large = arr[0]
        small = arr[1]
        total = large + small;

        for (let i = small; i <= large; i++) {
            sum += i;
        }

        //sum += total;

    } else {
        large = arr[1]
        small = arr[0]
        for (let i = small; i <= large; i++) {
            sum += i;
        }
    }

    return sum;
}

//if we have cases like c and d, we cant bigin fhe foorloop at zero. 
//we need to begin at 10 to 40 to account for numbers between 10 and 40(inclusive).




//use cases

let a = (sumRange([1, 4]))

let b = sumRange([1, 3])

let c = sumRange([40, 10])

let d = sumRange([500, 2500])

console.log(a,b,c, "D:"+d)







