const filter=(ListOfElements,filterFunction)=>{
    if(ListOfElements.length==0){
        return []
    }
    else{
        let filteredList = [];
        ListOfElements.forEach((element)=>{
            if(filterFunction(element)){
                filteredList.push(element)

            }
            
        });
        return filteredList;
       
    }
}
module.exports=filter;