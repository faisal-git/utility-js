const head = require('./head');
const tail=require('./tail');

describe('Head', () => {

    it('Should return first element of the list', () => {
        let ListOfNumbers=[1,2,3,4];
        expect(head(ListOfNumbers)).toEqual(1);
    });
    it('should return null if list is empty',()=>{
        expect(head([])).toEqual(null);
    })

    

})

describe('Tail',()=>{
    it('should return empty array when List if empty',()=>{
        expect(tail([])).toEqual([]);
    })
    it('should return empty array when List has single element',()=>{
        expect(tail([1])).toEqual([]);
    })
    it('should return everything except first element ',()=>{
        let ListOfNumbers=[1,2,3,4];
        let ListOfNumbersWithOutFristElement=[2,3,4];
        expect(tail(ListOfNumbers)).toEqual(ListOfNumbersWithOutFristElement);
    })
   
})
