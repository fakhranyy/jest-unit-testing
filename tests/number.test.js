const { checkNumber, sayHello } = require("../src/main")

/**
 * @name expect
 * @job  expect the value that i want
 * 
 * @name toBe
 * @job compare the (expect value & toBe value) and if it's both equal each other the test will pass, and if not the test will be failed
 */

describe("checkNumber", ()=>{
    test("should return the number itself if input is positive", ()=>{
        const result = checkNumber(2);
        expect(result).toBe(2)
    })
    
    test("should return 0  if input is negative", ()=>{
        const result = checkNumber(-2);
        expect(result).toBe(0)
    })
    
    test("should return 0  if input is 0", ()=>{
        const result = checkNumber(0);
        expect(result).toBe(0)
    })
})
