var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var import_vitest = __toModule(require("vitest"));
var import_test_utils = __toModule(require("./test_utils"));
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;
function mask(aa, mm) {
  return aa.map((a, i) => mm[i] ? a : 0);
}
const testCases = [
  [
    [2, 5, 3, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ],
  [
    [2, 5, 3, 0, 1],
    [0, 1, 0, 0, 1],
    [0, 5, 0, 0, 1]
  ],
  [
    [2, 5, 3, 0, 1],
    [0, 1, 1, 0, 1],
    [0, 5, 3, 0, 1]
  ],
  [
    [2, 5, 3, 0, 1],
    [1, 1, 1, 1, 1],
    [2, 5, 3, 0, 2]
  ]
];
function tests(fn, testCases2) {
  testCases2.forEach((testCase) => {
    const fnInputs = testCase.slice(0, testCase.length - 1);
    const expect2 = testCase[testCase.length - 1];
    (0, import_vitest.it)("works with given examples", () => {
      const result = fn.apply(this, fnInputs);
      import_vitest.assert.deepEqual(result, expect2, (0, import_test_utils.error)(fn, result, expect2, ...fnInputs));
    });
  });
}
(0, import_vitest.describe)("mask", () => {
  tests(mask, testCases);
});
//# sourceMappingURL=suite.test.js.map
