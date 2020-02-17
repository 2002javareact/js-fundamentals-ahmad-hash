

/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
/*
    let y = startIndex <= endIndex;
    if (!(y)){
  throw new Error  ('please first enter the index you want to start printing from untill the last word/number you want to be display on the screen')
}
*/
function substring(someStr, startIndex, endIndex) {
  x = someStr
   if (startIndex>endIndex) 
   {
       Throw
   }
x=x.substring (startIndex , endIndex)

    return x;
}
try {
    console.log (substring('helloo', 0, 2))
    
} catch (e) { 
    throw ('Renter the Valid values')
    
}


