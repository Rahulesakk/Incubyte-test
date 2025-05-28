const { add } = require("./stringCalculator")

test("returns 0 for empty string" ,() =>{
    expect(add('')).toBe(0);
})
test("returns number for a single Number", () => {
    expect(add('1')).toBe(1);
})
test("add's two comma-separated numbers", () => {
    expect(add('1,3')).toBe(4);
})