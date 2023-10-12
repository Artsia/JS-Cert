function compareStrings(firstString, secondString, thirdString) {
    
    /*const r1 = firstString.localeCompare(secondString);
    const r2 = secondString.localeCompare(thirdString);*/
    
    const a = [firstString, secondString, thirdString]; 
    a.sort();
    const result = a.join("");
    
    
   
    return result;

}