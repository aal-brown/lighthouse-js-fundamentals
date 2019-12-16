function merge(array1, array2) {
  let mergedArray = array1.concat(array2);
  let sortedArray = [];
  
  while( mergedArray.length > 0) { // this while loop allows us to keep looping until the whole array is sorted
    
    let minValue = mergedArray[0]; //This is needed to reset the value of minValue on each iteration of the loop
    
    for(let i = 0; i < mergedArray.length; i++) { //this loop is used to find the minimum value.
      if (minValue > mergedArray[i]) {
        minValue = mergedArray[i];
      }
    }
    
    sortedArray.push(minValue);
       
    for (let i = 0; i < mergedArray.length; i++) {
      if (mergedArray[i] === minValue) {
        mergedArray.splice(i,1);
        break //this is to make sure that if two valus are equal, we don't remove them from the array on the same "turn" of the loop. This is saying "once you've found the right value, then stop"
      }
    }    
  }
  return sortedArray;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));
console.log(merge([ 4 ], [ 2, 5, 8 ]));
console.log(merge([ 1, 2, 6 ], [])); 	