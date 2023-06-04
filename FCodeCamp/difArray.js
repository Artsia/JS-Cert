/**Compare two arrays and return a 
 * new array with any items only found 
 * in one of the two given arrays, but not both. 
 * return the symmetric difference of the two arrays. */


function diffArray(arr1, arr2) {
    const newArr = [];

    // empty or either array case
    if (arr1.length === 0 && arr2.length === 0) {
        return newArr;
    } else if (arr1.length === 0) {
        return arr2;
    } else if (arr2.length === 0) {
        return arr1;
    } else { //both array lenghth are => 1
        for (let i = 0; i < arr1.length; i++) {
            if (!arr2.includes(arr1[i])) {
                newArr.push(arr1[i]);
            }
        }

        for (let i = 0; i < arr2.length; i++) {
            if (!arr1.includes(arr2[i])) {
                newArr.push(arr2[i]);
            }
        }
    }

    return newArr;
}




/**
 * Given an array, remove all zeroes and return a new array
 * @arr - an array
 */

function removeZeroes(arr) {

    let temp = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            temp[i] = arr[i]
        }
    }

    return temp;
}

/**Count number of zeros in array
 * @arr - array whose content is to be examined for zeros
 */
function countArrZeroes(arr) {

    let countedZeros = 0; // number of counted zeroes

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            countedZeros++;
        }
    }
    return countedZeros;
}



//test cases:

let a = diffArray([], [1, 2, 3, 4, 5]);
console.log(a)

let b = diffArray([1, 2, 3, 5], []);
console.log(b)

let c = diffArray([], []);
console.log(c)


let d = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(d)


/*function dif(arr1, arr2) {
    let arr = [];
    for (let i = 0; i < arr1.length; i++) {
        let flag = false;

        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                flag = true;
                break;
            }
        }

        if (!flag) {
            arr.push(arr1[i]);
        }
    }
    return arr
}



let e = dif([1, 2, 3, 5], [1, 2, 3, 4, 5])

console.log(e);*/


/**
 * function diffArray(arr1, arr2) {
    const newArr = [];
    let arr = [];


    //empty or either or array caes
    if (arr1.length == 0 && arr2.length == 0) {
        return newArr;
    } else if (arr1.length == 0) {
        return arr2;
    } else if (arr2.length == 0) {
        return arr1;
    }
    else { //if both arrays are not empty


            //no-need for code in this 
          for (let o = 0; o < arr1.length; o++) {
             for (let i = 0; i < arr2.length; i++) {
                 if (arr1[o] != arr2[i]) {  // [1,2,3,5]  [1,2,3,4,5,1] => [0,0,0,0] [0,0,0,4,0,0]
                     //arr2[i] = 0;
                     //arr[o] = arr2[o] - values in array 2 that are in array 1
                     //arr[i] = arr2[i] - values in both
 
 
 
                 }
 
               
 
                 //arr1[o] = 0;
                 //console.log("Array 1 values:",arr1)
                 //console.log("Array 2 values:",arr2)
             }
         }

         for (let i = 0; i < arr1.length; i++) {
            if (!arr1.includes(arr2[i])) {
                arr.push(arr2[i]);
            }
        }


        for (let i = 0; i < arr2.length; i++) {
            if (!arr2.includes(arr1[i])) {
                arr.push(arr1[i]);
            }
        }

    }

    return arr;
}*/

/***o(n^2)
 * EMPTY ARRAYS
 * if a1 is empty, return a2 (viseversa)
 * if both are empty, return empty array
 * 
 * 
 * NUMBERS
 * 
 * for every number in a1[i] that matches a2[i], delete those a2[i]
 * at the end of the iteration delete a1[i] - incase of duplications
 * 
 * for now deletion will be sub with zero or negative number
 * 
 * later I wil take # of zeros - lenght of final array, make a new array and insert everything but zeros
 * example: [0,0,30,0,5] l =5 zeroCount = 3, narraylenght = 2
 * 
 * Now for STRINGS
 * 
 * for same values replace with empty strings
 * 
 * COMBO of strings and numbers
 * 
 * when do i know that what am comparing is a number or a string?
 *  
 * OPTION1: Work with SAME datatype by breaking down a1 into a1a(numbers) and a1b(strings)
 *this would be the case for a2. compare 4 arrays and combine after.
 *
 * 
 * OPTION2: TURN both arrays into string objects,compare
 * usage of == , ===, eqauls()
 * 
 * 
 * Option 3:
 * 
 * 
 * 
 * 
 * 
 * 
 * 

 */