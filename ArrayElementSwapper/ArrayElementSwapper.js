function swapElements(arr, index1, index2) {
  // check if the indices are valid
  if (index1 < 0 || index2 < 0 || index1 >= arr.length || index2 >= arr.length) {
    console.log('Invalid indices');
  }

  // swap the elements at the given indices
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;

  return arr;
}
