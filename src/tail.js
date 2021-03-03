const tail = (ListOfNumbers) =>{
    if(ListOfNumbers.length==0){
        return []
    }
    else{
        numberOfElementsInList=ListOfNumbers.length;
        return ListOfNumbers.slice(1,numberOfElementsInList);
    }
    
}

module.exports=tail;