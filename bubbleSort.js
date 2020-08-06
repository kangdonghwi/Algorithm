function bubbleSort(array) {
  for (let i = 0; i < array.length-1; i++) {
    let swap;
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        swap = array[j];
        array[j] = array[j + 1];
        array[j + 1] = swap;
      }
    }
    console.log(`${i}회전: ${array}`);
    if (!swap) {
      break;
    }
  }
  return array;
}
