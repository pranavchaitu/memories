function averagePair(arr, avg) {
  let start = 0;
  let next = 1;
  while (next < arr.length && start < next) {
    if ((arr[start] + arr[next]) / 2 === avg) {
      return true;
    }
    next++;
    continue;
    start++;
  }
  return false;
}

console.log(averagePair([1, 5, 4, 8], 4.5));
