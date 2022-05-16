import sut from "../src/index.js"

describe("The tests for sum", () => {

    fit("Should subtract 2 numbers if a < b", ()=>{
        //Arrange
        const a =3
        const b =5
        const expected = 2
        //Act
        const actual =sut(a,b)
    
        //Assert
        expect(actual).toBe(expected)
    })
    
    it("Should add 2 numbers", ()=>{
        //Arrange
        const a =5
        const b =3
        const expected = 8
        //Act
        const actual =sut(a,b)
    
        //Assert
        expect(actual).toBe(expected)
    })

    it("Should fail with a string input",  () =>{
        //Arrange
        const a = "str", b=5, expected = "Bad Input"
    
        //Act
        const actual = sut(a,b)

        //Assert
        expect(actual).toBe(expected)
    })
})

