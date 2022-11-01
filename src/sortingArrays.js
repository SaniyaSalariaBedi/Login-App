

// function to sort two arrays 
  const sortArrays = (intArr1, intArr2) => {
    let concatArr = { ...intArr1, ...intArr2 }
    concatArr.sort(function (a, b) { return a - b });
    console.log(concatArr);
  }

  
  sortArrays([2, 5, 1, 6], [4, 7, 3, 4])