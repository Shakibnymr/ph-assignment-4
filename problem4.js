function findAddress(obj) {
  if (typeof obj !== "object") {
    return "please provide me a valid object";
  } else {
    const street = obj.street || "__";
    const house = obj.house || "__";
    const society = obj.society || "__";
   return street + ',' + house + ',' + society; 
  }
}

var address = 
{  street: 10,
  house: "15A",
  society: "Earth Perfect"}
;
 console.log(findAddress(address));
