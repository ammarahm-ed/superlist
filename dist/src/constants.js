"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollDirection = exports.FastListItemTypes = void 0;
exports.FastListItemTypes = {
    SPACER: 0,
    HEADER: 1,
    FOOTER: 2,
    SECTION: 3,
    ROW: 4,
    SECTION_FOOTER: 5,
};
var ScrollDirection;
(function (ScrollDirection) {
    ScrollDirection[ScrollDirection["UP"] = 0] = "UP";
    ScrollDirection[ScrollDirection["DOWN"] = 1] = "DOWN";
})(ScrollDirection = exports.ScrollDirection || (exports.ScrollDirection = {}));
