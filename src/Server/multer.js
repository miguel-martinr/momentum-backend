"use strict";
exports.__esModule = true;
exports.upload = void 0;
var multer_1 = require("multer");
var path_1 = require("path");
exports.upload = multer_1["default"]({
    storage: multer_1["default"].diskStorage({
        destination: 'tempImages/',
        filename: function (req, file, cb) {
            cb(null, Date.now() + path_1["default"].extname(file.originalname));
        }
    })
});
