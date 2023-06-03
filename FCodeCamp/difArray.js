/**Compare two arrays and return a 
 * new array with any items only found 
 * in one of the two given arrays, but not both. 
 * return the symmetric difference of the two arrays. */

function diffArray(arr1, arr2) {
    const newArr = [];
    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

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