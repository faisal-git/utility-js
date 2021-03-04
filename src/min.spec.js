const max=require('./min');

describe('Min',()=>{
    it('should return undefined for empty list',()=>{
        let emptyList=[]
        expect(max(emptyList)).toBeUndefined();
    })
    it('should return 1 for array [1,2,3]',()=>{
        let ListOfNumbers=[1,2,3];
        expect(max(ListOfNumbers)).toEqual(1);
    })

})