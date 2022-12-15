"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./label.css");
var Label = function (_a) {
    var _b = _a.title, title = _b === void 0 ? "label" : _b, _c = _a.backgroundColor, backgroundColor = _c === void 0 ? "white" : _c, _d = _a.size, size = _d === void 0 ? "normal" : _d;
    return ((0, jsx_runtime_1.jsx)("span", __assign({ className: "label custom-border custom-".concat(backgroundColor, " ").concat(size) }, { children: title })));
};
exports.Label = Label;
