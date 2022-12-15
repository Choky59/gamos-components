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
exports.LoggedOut = exports.LoggedIn = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Header_1 = require("../../components/example/header/Header");
exports.default = {
    title: 'Example/Header',
    component: Header_1.Header,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(Header_1.Header, __assign({}, args)); };
exports.LoggedIn = Template.bind({});
exports.LoggedIn.args = {
    user: {
        name: 'Jane Doe',
    },
};
exports.LoggedOut = Template.bind({});
exports.LoggedOut.args = {};
