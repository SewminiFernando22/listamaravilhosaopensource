function countSort(inputArray) {
  // Finding the maximum element of inputArray.
  let M = Math.max(...inputArray);

  // Initializing countArray with 0
  let countArray = Array(M + 1).fill(0);

  // Mapping each element of inputArray as an index of countArray
  for (let num of inputArray) {
    countArray[num]++;
  }

  // Calculating prefix sum at every index of countArray
  for (let i = 1; i <= M; i++) {
    countArray[i] += countArray[i - 1];
  }

  // Creating outputArray from countArray
  let outputArray = new Array(inputArray.length);

  for (let i = inputArray.length - 1; i >= 0; i--) {
    outputArray[countArray[inputArray[i]] - 1] = inputArray[i];
    countArray[inputArray[i]]--;
  }

  return outputArray;
}

// Driver code
let inputArray = [4, 3, 12, 1, 5, 5, 3, 9];
let outputArray = countSort(inputArray);

console.log(outputArray.join(" "));
