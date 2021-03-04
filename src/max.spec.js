const max=require('./max');

describe('Max',()=>{
    it('should return undefined for empty list',()=>{
        expect(max([])).toBeUndefined();
    })
    it('should return 3 from array [1,2,3]',()=>{
        let ListOfNumbers=[1,2,3];
        expect(max(ListOfNumbers)).toEqual(3);
    })

})
