/**You will be provided with an initial array 
 * (the first argument in the destroyer function),
 *  followed by one or more arguments.
 *  Remove all elements from the initial
 *  array that are of the same value as these arguments.

Note: You have to use the arguments object. */

function destroyer(arr, ...valuesToRemove) {
    // Create a new array to store the filtered values
    let temp = [];

    // Iterate over each element in the input array
    for (let j = 0; j < arr.length; j++) {
        let shouldRemove = false;

        // Check if the current element should be removed
        for (let i = 0; i < valuesToRemove.length; i++) {
            if (arr[j] === valuesToRemove[i]) {
                shouldRemove = true;
                break; // Exit the inner loop since we found a match
            }
        }

        // Add the element to the new array if it shouldn't be removed
        if (!shouldRemove) {
            temp.push(arr[j]);
        }
    }

    // Return the filtered array
    return temp;
}

//test

console.log(destroyer([1, 2, 3, 1, 2, 3,4], 2, 3))





































