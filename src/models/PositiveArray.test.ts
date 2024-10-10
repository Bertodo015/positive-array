import { PositiveArray } from "./PositiveArray";

let value: PositiveArray;

describe("Tests over array cases", () => {
    beforeEach (() => {
        value = new PositiveArray();
    });

    it("should the value is empty", () => {
        const array = value.values;
        const expectValue = [];
        expect(array).toEqual(expectValue);
    });
});