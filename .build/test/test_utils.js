var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  ARGUMENT_NAMES: () => ARGUMENT_NAMES,
  ARGUMENT_SPLIT: () => ARGUMENT_SPLIT,
  STRIP_COMMENTS: () => STRIP_COMMENTS,
  STRIP_KEYWORDS: () => STRIP_KEYWORDS,
  error: () => error,
  getParamNames: () => getParamNames
});
const STRIP_COMMENTS = /((\/\/.*$)|(\/\*.*\*\/))/gm;
const STRIP_KEYWORDS = /(\s*async\s*|\s*function\s*)+/;
const ARGUMENT_NAMES = /\(([^)]+)\)\s*=>|([a-zA-Z_$]+)\s*=>|[a-zA-Z_$]+\(([^)]+)\)|\(([^)]+)\)/;
const ARGUMENT_SPLIT = /[ ,\n\r\t]+/;
function getParamNames(func) {
  const fnStr = func.toString().replace(STRIP_COMMENTS, "").replace(STRIP_KEYWORDS, "").trim();
  const matches = ARGUMENT_NAMES.exec(fnStr);
  var match;
  if (matches) {
    for (var i = 1; i < matches.length; i++) {
      if (matches[i]) {
        match = matches[i];
        break;
      }
    }
  }
  if (match === void 0) {
    return [];
  }
  return match.split(ARGUMENT_SPLIT).filter((part) => part !== "");
}
function error(fn, result, expect, ...inputs) {
  let params = getParamNames(fn);
  let text = "inputs:";
  inputs.forEach((val, i) => text += `
 ${inputs[i]} ${params[i]}`);
  return text += `
 ${expect} expect
 ${result} result`;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ARGUMENT_NAMES,
  ARGUMENT_SPLIT,
  STRIP_COMMENTS,
  STRIP_KEYWORDS,
  error,
  getParamNames
});
//# sourceMappingURL=test_utils.js.map
