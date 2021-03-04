const reduce=require('./reduce');

const min=(ListOfNumbers)=>{
    return reduce(ListOfNumbers,(x,y)=>{
        if(x<=y){
            return x;
        }
        else{
            return y;
        }
    })
    
}
module.exports=min;