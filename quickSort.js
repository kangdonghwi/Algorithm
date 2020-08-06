//basic 퀵정렬

function quickSort(arr){
  if (arr.length <= 1){
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i=1; i<arr.length; i++){
    if(pivot>arr[i]){
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right)); 
}

const array = [6,3,5,4,8,2,1];

console.log(quickSort(array));



//in place 퀵정렬

function quickSort(array, left = 0, right = array.length - 1) {
  if (left >= right) {
    return;
  }
  const mid = Math.floor((left + right) / 2);
  const pivot = array[mid];
  const partition = divide(array, left, right, pivot);
  quickSort(array, left, partition - 1);
  quickSort(array, partition, right);
  function divide(array, left, right, pivot) {
    console.log(`array: ${array}, left: ${array[left]}, pivot: ${pivot}, right: ${array[right]}`);
    while (left <= right) {
      while (array[left] < pivot) {
        left++;
      }
      while (array[right] > pivot) {
        right--;
      }
      if (left <= right) {
        let swap = array[left];
        array[left] = array[right];
        array[right] = swap;
        left++;
        right--;
      }
    }
    return left;
  }
  return array;
}
