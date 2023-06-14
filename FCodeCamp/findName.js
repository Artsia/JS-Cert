/**Make a function that looks through an array of objects (first argument) 
 * and returns an array of all objects that have matching name and value pairs 
 * (second argument). Each name and value pair of the source object has to be
 *  present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, 
{ first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, 
then you must return the third object from the array (the first argument), 
because it contains the name and its value, that was passed on as the second argument. */

function whatIsInAName(collection, source) {

    objsInCollection = collection.length;
    tempArray = []

    for (let i = 0; i < objsInCollection; i++) {

        dic = objsInCollection[i];
        sourceKey = Object.keys(source)

        if (source.length == 1) {
            if (keys in dic === sourceKey) {
                tempArray.push(collection[i])
            }

        } else if (source.length > 1) {

            for (i in source) {
                if (keys in dic === sourceKey) {
                    if (dic[keys] == source[sourceKey]) {
                        tempArray.push(collection[i])
                    }

                }

            }

        }






        //console.log(objsInCollection.values());
        /*if (collection[i].first === source.last || collection[i].last === source.last) {
            tempArray.push(collection[i])
        }*/
    }
    // key for k in source, get

    return tempArray

}

//https://www.collectionsjs.com/dict

a = whatIsInAName([
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }],
    { last: "Capulet" })

b = whatIsInAName([
    { "apple": 1 },
    { "apple": 1 },
    { "apple": 1, "bat": 2 }],
    { "apple": 1 })


console.log(a);

