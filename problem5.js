function canPay(changeArray, totalDue) {
  let sum = 0;
  for (let i = 0; i < changeArray.length; i++) {
    const element = changeArray[i];
    sum = sum + element;
  }
  if (Array.isArray(changeArray) && changeArray.length === 0) {
    return "please, put elements in your array";
  } else if (sum >= totalDue) {
    return true;
  } else {
    return false;
  }
}
const khucraTaka = [];
const chipsPrice = 10;
const output = canPay(khucraTaka, chipsPrice);
console.log(output);
