const min=require('./min');

describe('Min',()=>{
    it('should return undefined for empty list',()=>{
        let emptyList=[]
        expect(min(emptyList)).toBeUndefined();
    })
    it('should return 1 for array [1,2,3]',()=>{
        let ListOfNumbers=[1,2,3];
        expect(min(ListOfNumbers)).toEqual(1);
    })

})