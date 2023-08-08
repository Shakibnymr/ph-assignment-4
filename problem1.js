function cubeNumber (number) {
    if (typeof number != "number"){
        console.log('please, put a number first.')
    }
    const result = Math.pow(number,3);
    
    return result;

}
const num = 4;
const output = cubeNumber(num);
console.log(output);