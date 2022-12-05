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
(0, import_vitest.test)("Math.sqrt()", () => {
  (0, import_vitest.expect)(Math.sqrt(4)).toBe(2);
  (0, import_vitest.expect)(Math.sqrt(144)).toBe(12);
  (0, import_vitest.expect)(Math.sqrt(2)).toBe(Math.SQRT2);
});
(0, import_vitest.test)("JSON", () => {
  const input = {
    foo: "hello",
    bar: "world"
  };
  const output = JSON.stringify(input);
  (0, import_vitest.expect)(output).eq('{"foo":"hello","bar":"world"}');
  import_vitest.assert.deepEqual(JSON.parse(output), input, "matches original");
});
//# sourceMappingURL=basic.test.js.map
