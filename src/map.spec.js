
const map=require('./map');
const cube=require('./cube');
const identity=require('./identity');

describe('Map',()=>{
    it('should return [] for map([],cube)',()=>{
        expect(map([],cube)).toEqual([]);
    })
    it('shuold return [1,8,27] for map([1,2,3],cube)',()=>{
        let ListOfNumbers=[1,2,3];
        let ListOfCubeOfNumbers=[1,8,27];
        expect(map(ListOfNumbers,cube)).toEqual(ListOfCubeOfNumbers);

    })

    it('should return [1,2,3] for  map([1,2,3],identity)',()=>{
        let ListOfNumbers=[1,2,3];
        expect(map(ListOfNumbers,identity)).toEqual(ListOfNumbers);
    })

    it('shuold return [11] for map([a{x:10}],someObject => someObject.x + 1)',()=>{
        let ListOfObjects=[{x:10}];
        let ListOfValuesOfObjectIncrementedByOne=[11];
        expect(map(ListOfObjects,someObject => someObject.x + 1)).toEqual(ListOfValuesOfObjectIncrementedByOne);
        
    })

})
