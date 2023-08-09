function findAddress (obj){
    if (typeof obj !== "object"){
        return "please provide me a valid object";
    }
    else{
        const street = obj.street || "__";
        const house = obj.house ||"__";
        const society = obj.society || "__";
        console.log(street, house, society);
        }
    
    }


 var address = {
    street: 10,
    // house: "15A",
    society: "Earth Perfect"
 }
 findAddress(address); 


//     for (const key in obj) {
    // if (obj.hasOwnProperty.call(obj, key)) {
    //     const element = obj[key];
        
    // }