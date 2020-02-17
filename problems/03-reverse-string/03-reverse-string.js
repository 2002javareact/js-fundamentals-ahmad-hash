/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
let x=''
function reverseStr(someStr) 
{
    
    for (let i = someStr.length; i>=0; i--)
        {
            x=x+someStr.substr(i,1)
        
        }
        return x
}

console.log(reverseStr('This is the reversed string'));
     