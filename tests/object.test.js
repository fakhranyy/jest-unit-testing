const { getUser } = require("../src/main")

describe('getUser', () => {
    test('should return the user with the given id & name ', () => { 
            const result = getUser(1, "ziad")
            expect(result).toEqual({id: 1, name: "ziad"}) // should equal each othr
            
            // * with more filixabilty
            expect(result).toMatchObject({id: 1, name: "ziad"})

            // * test for only one property in thr object
            expect(result).toHaveProperty("id",1 ) // key, value
            

     })
     
});
