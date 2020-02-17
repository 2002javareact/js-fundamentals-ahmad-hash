/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
    
if (sumNum<= 0 ||sumNum<= 1 ){
return (1)
}

     for (let y = sumNum - 1; y >= 2; y--){
         
       sumNum *= y;
      
        
              }
       return sumNum;       
     }
    
  console.log (factorial(5))


/*Farctorial of x number is multiplied by itself and all the counting decrementing down till 0.
 Moreover addition of every single pair which multiplied to each other.
so x * x-i, i = 1, j = 2 x--; i++; j >= 0, i <= x*/