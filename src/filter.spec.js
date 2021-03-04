const filter=require('./filter');
const filterUpperCase=require('./filterUpperCase');

describe('Filter',()=>{
    it('filter([], x => true) should return []',()=>{
        let emptyList=[];
        expect(filter(emptyList,x=>true)).toEqual(emptyList);
    })
    it('filter([1,2,3],x => true) should give [1,2,3]',()=>{
        let ListOfElements=[1,2,3];
        let ListOfFilteredElements=[1,2,3];
        expect(filter(ListOfElements,x => true)).toEqual(ListOfFilteredElements);
    })
    it('filter([1,2,3],x => false) should give []',()=>{
        let ListOfElements=[1,2,3];
        expect(filter(ListOfElements,x=>false)).toEqual([]);
    })

    it('filter([1,2,3],x => x > 1) should give [2,3]',()=>{
        let ListOfElements=[1,2,3];
        let ListOfFilteredElements=[2,3]
        expect(filter(ListOfElements,x=>x>1)).toEqual(ListOfFilteredElements);
    })
    it('filter([a,B,c,D], filterUpperCase) should be [B,D]',()=>{
        let ListOfCharacters=['a','B','c','D'];
        let ListOfUpperCharacters=['B','D'];
        expect(filter(ListOfCharacters,filterUpperCase)).toEqual(ListOfUpperCharacters);
   
    })
})


