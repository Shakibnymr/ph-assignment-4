function findAddress (obj){
    if (typeof obj !== "object"){
        return "please provide me a valid object";
    }
    else{
        for (const key in obj) {
            if (obj.hasOwnProperty.call(obj, key)) {
                const element = obj[key];
                
            }
        }
        const street = obj.street || "__,";
        const house = obj.house ||",__,";
        const society = obj.society || ",__ ";
        console.log(street, house, society);
    }

}
 var address = {
    
    house: "15A",
    
 }
 findAddress(address); 