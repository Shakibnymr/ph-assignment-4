function sortMaker(arr) {
  if (arr[1] < 0 || arr[0] < 0) {
    return "invalid input";
  } else if (arr[0] === arr[1]) {
    return "equal";
  } else if (arr[0] > 0 && arr[1] > 0) {
    if (arr[0] < arr[1]) {
      const swap = arr[0];
      arr[0] = arr[1];
      arr[1] = swap;
      return arr;
    } else {
      return arr;
    }
  }
}
const array = [2, 3];
const output = sortMaker(array);
console.log(output);
