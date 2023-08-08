function sortMaker(arr) {
  if (arr[1] < 0 || arr[0] < 0) {
    console.log("invalid input");
  } else if (arr[0] === arr[1]) {
    console.log("equal");
  } else if (arr[0] > 0 && arr[1] > 0) {
    if (arr[0] < arr[1]) {
      const swap = arr[0];
      arr[0] = arr[1];
      arr[1] = swap;
      console.log(arr);
    } else {
      console.log(arr);
    }
  }
}
const array = [4, -2];
const output = sortMaker(array);
