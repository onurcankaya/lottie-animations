const index = require("./index")
// @ponicode
describe("index.default", () => {
    test("0", () => {
        let callFunction = () => {
            index.default()
        }
    
        expect(callFunction).not.toThrow()
    })
})
