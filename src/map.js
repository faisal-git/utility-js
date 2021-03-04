const cube=require('./cube');
const identity=require('./identity');

const map=(List,Function)=>{
    if(List.length==0){
        return []
    }
    else{
        let TransformedValues = [];
        List.forEach((Element)=>{
            TransformedValues.push(Function(Element));
        });
        console.log(TransformedValues);
        return TransformedValues;
    }
    return null;
}

module.exports=map;