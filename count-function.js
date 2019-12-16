function range (start, end, step) {
  let array = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return array;
  } else {
    for(i = start; i <= end; i+=step) {
      array.push(i);
    }
      return array;
  }
}

console.log(range(0,20,5));


// Also showing how to do it with a while loop
/*
function range2 (start, end, step) {
  let array2 = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return array2;
  } else {
    let j = start;
    while ( j <= end) {
      array2.push(j);
      j += step;
  }
    return array2;
  }
}

console.log(range2(0,20,5)); */
