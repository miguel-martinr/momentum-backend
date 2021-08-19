"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.corsConfig = void 0;
var cors_1 = require("cors");
var whitelist_json_1 = require("./whitelist.json");
var allowed = __spreadArray(__spreadArray([], whitelist_json_1.whitelist), whitelist_json_1.whitePatterns);
var opts = {
    origin: allowed
};
exports.corsConfig = cors_1["default"](opts);
