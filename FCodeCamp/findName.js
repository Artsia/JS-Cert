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

    tempArray = []
    sourceKey = Object.keys(source) //return an array of keys from the source collection

    for (let i = 0; i < collection.length; i++) {

        dic = collection[i]; //each collection contains an array of dictionary objects

        if (source.length == 1) {
            if (keys in dic === sourceKey[0]) {
                tempArray.push(dic)
            }

        } else if (source.length > 1) {
            //loop through source collection keys adn compare values with dictionary
            for (i in source) {
                if (keys in dic === sourceKey[i]) {
                    if (dic[keys] == source[sourceKey]) {
                        tempArray.push(dic)
                    }

                }

            }

        }
        //console.log(objsInCollection.values());
        /*if (collection[i].first === source.last 
            || collection[i].last === source.last) {
            tempArray.push(collection[i])
        }*/
    }

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

