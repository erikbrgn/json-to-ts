import * as assert from "assert";

export const removeWhiteSpace = (str) => str.replace(/\s/g, "");

export const assertExpectedTypesIncludesActual = (generatedTypes: string[], expectedTypes: string[]) => {
  generatedTypes.forEach((actual) => {
    const noWhiteSpaceInterface = removeWhiteSpace(actual);
    expectedTypes.forEach((expected) => {
      assert.strictEqual(noWhiteSpaceInterface, expected);
    });
  });
};
