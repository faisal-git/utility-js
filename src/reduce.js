const reduce=(ListOfElements,reducingFunction,initializeWith)=>{
    let reducedValue;
    if(typeof(initializeWith)=='undefined'){
        reducedValue=ListOfElements[0];
        numberOfElements=ListOfElements.length;
        ListOfElements=ListOfElements.slice(1,numberOfElements);
    }
    else{
        reducedValue=initializeWith;
    }   
    ListOfElements.forEach((element)=>{

        reducedValue=reducingFunction(reducedValue,element);
    })
    return reducedValue;
    
}
module.exports=reduce;