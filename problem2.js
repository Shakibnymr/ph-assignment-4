function matchFinder(string1, string2) {
  if (typeof str1 != "string" || typeof str2 != "string") {
    console.log("put string in both parameters.");
  }
if(string1.includes(string2)){
return true;
} else {
    return false;
}

}
const str1 = "Peter Parker";
const str2 = "pet";
const output = matchFinder(str1, str2);
console.log(output);




