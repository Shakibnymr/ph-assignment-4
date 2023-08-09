function cubeNumber(number) {
  if (typeof number != "number") {
    return "please, put a number first.";
  }
  const result = Math.pow(number, 3);

  return result;
}
const num = 'three';
const output = cubeNumber(num);
console.log(output);
