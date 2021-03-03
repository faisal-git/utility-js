const head = require('./head');

describe('Head', () => {

    it('Should return first element of the list', () => {
        let ListOfNumbers=[1,2,3,4];
        expect(head(ListOfNumbers)).toEqual(1);
    });
    it('should return null if list is empty',()=>{
        expect(head([])).toEqual(null);
    })

    

})
