"use strict";
exports.__esModule = true;
var express_1 = require("express");
var Cors_1 = require("./Cors");
var post_1 = require("./Routers/post");
var app = express_1["default"]();
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: true }));
app.use(Cors_1.corsConfig);
app.use(post_1.postRouter);
var PORT = 3002;
app.listen(PORT, function () {
    console.log("Listenning on " + PORT);
});
