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
test('adds numbers with newline and comma separators', () => {
    expect(add("1\n2,4")).toBe(7);
})
test('throws error on single negative number', () => {
    expect(() => add("1,-2")).toThrow("Negative Numbers not allowed -2");
});
