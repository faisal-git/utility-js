const reduce=require('./reduce');

describe('Reduce',()=>{
    it('reduce([],(x,y)=>x+y) should return undefined',()=>{
        let emptyList=[];
        expect(reduce(emptyList,(x,y)=>x+y)).toBeUndefined();

    })
    it('reduce([],v(x,y)=>x+y,10) should return 10',()=>{
        let emptyList=[];
        expect(reduce(emptyList,(x,y)=>x+y,10)).toEqual(10);
    })
    it('reduce([a,b,c],(x,y)=>x+y) should return  abc',()=>{
        let ListOfElements=['a','b','c'];
        expect(reduce(ListOfElements,(x,y)=>x+y)).toBe('abc');
    })
    it('reduce([a,b,c],(x,y)=>x+y,’z’), should return zabc',()=>{
        let ListOfElements=['a','b','c'];
        expect(reduce(ListOfElements,(x,y)=>x+y,'z')).toBe('zabc');
    })

})










