const filter = require("./filter");

const filterUpperCase=(character)=>{
    isUpperCase= character == character.toUpperCase();
    return isUpperCase;
}
module.exports=filterUpperCase;