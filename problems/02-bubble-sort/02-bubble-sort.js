/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
//let numArray
//bubbleSort (8,3,5,7,9);
/*let n = [4,8,9,6,2,3,4,7,2]
function bubbleSort(numArray) {
    
   let x 
    
   for (let i = 0; i <= numArray.Length; i++){
   
     for (let j = i + 1; j <= numArray.Length + 1; j++){

        if (numArray[j] > numArray [i]){

            let Temporary_setter = numArray[j];
            numArray [j] = numArray [i]
            numArray[i] = Temporary_setter;

        }


    }


   } 

}
bubbleSort(n)
   console.log(n);
*/
   let a = [4,8,9,6,2,3,4,7,2]

//Descending  
function bubbleSort(numArray) 
{
    for (let i = 0; i < a.length; i++) 
    {
     for (let j = i+1; j < a.length; j++) 
        {
        let T
        if (a[j]>a[i]) 
             {
              T=a[j]   
              a[j]=a[i]
              a[i]= T
             } 
        }  
    }
}

bubbleSort(a)
   console.log(a);