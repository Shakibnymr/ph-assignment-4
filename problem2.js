function matchFinder(string1, string2) {
  if (typeof string1 != "string" || typeof string2 != "string") {
    return "put string in both parameters.";
  }
  if (string1.includes(string2)) {
    return true;
  } else {
    return false;
  }
}
const str1 = "John Doe";
const str2 = 'ohn';
const output = matchFinder(str1, str2);
console.log(output);
