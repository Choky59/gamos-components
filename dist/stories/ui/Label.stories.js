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
exports.h2 = exports.h1 = exports.normal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Label_1 = require("../../components/ui/label/Label");
exports.default = {
    title: 'UI/Label',
    component: Label_1.Label,
    argTypes: {
        size: { control: "select" },
        backgroundColor: { control: "select" }
    },
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(Label_1.Label, __assign({}, args)); };
exports.normal = Template.bind({});
exports.normal.args = {
    size: 'normal'
};
exports.h1 = Template.bind({});
exports.h1.args = {
    size: "h1"
};
exports.h2 = Template.bind({});
exports.h2.args = {
    size: "h2"
};
