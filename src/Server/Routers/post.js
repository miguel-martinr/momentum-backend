"use strict";
exports.__esModule = true;
exports.postRouter = void 0;
var express_1 = require("express");
var multer_1 = require("../multer");
var fs = require("fs");
exports.postRouter = express_1.Router();
exports.postRouter.post('/upload/image', multer_1.upload.single("image"), function (req, res) {
    console.log(req.body);
    if (req.file && req.body.private && req.body.private !== 'true') {
        fs.rename('tempImages/1629340591880.png', "./public/1629340591880.png", function (err) {
            if (err)
                throw err;
        });
    }
});
