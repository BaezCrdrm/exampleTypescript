import { assert } from "chai";
import { sum } from "../../src/utils";

describe("getErrorMessage", () => {
    const f = sum;
    it("should be a function", (done) => {
        assert.exists(f);
        assert.typeOf(f, "function");
        done();
    });
    
    it("should work", (done) => {
        const res = f(1, 2);
        assert.typeOf(res, "number");
        assert.equal(res, 3);
        done();
    });
});