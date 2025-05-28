import {add} from "./stringCalculator"

test("returns 0 for empty string" ,() =>{
    except(add('')).toBe(0);
})