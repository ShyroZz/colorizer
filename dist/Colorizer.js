"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color;
(function (color) {
    color[color["black"] = 30] = "black";
    color[color["red"] = 31] = "red";
    color[color["green"] = 32] = "green";
    color[color["yellow"] = 33] = "yellow";
    color[color["blue"] = 34] = "blue";
    color[color["magenta"] = 35] = "magenta";
    color[color["cyan"] = 36] = "cyan";
    color[color["white"] = 37] = "white";
    color[color["default"] = 39] = "default";
    color[color["grayLight"] = 90] = "grayLight";
    color[color["redLight"] = 91] = "redLight";
    color[color["greenLight"] = 92] = "greenLight";
    color[color["yellowLight"] = 93] = "yellowLight";
    color[color["blueLight"] = 94] = "blueLight";
    color[color["magentaLight"] = 95] = "magentaLight";
    color[color["cyanLight"] = 96] = "cyanLight";
    color[color["whiteLight"] = 97] = "whiteLight";
    color[color["blackBackground"] = 40] = "blackBackground";
    color[color["redBackground"] = 41] = "redBackground";
    color[color["greenBackground"] = 42] = "greenBackground";
    color[color["yellowBackground"] = 43] = "yellowBackground";
    color[color["blueBackground"] = 44] = "blueBackground";
    color[color["magentaBackground"] = 45] = "magentaBackground";
    color[color["cyanBackground"] = 46] = "cyanBackground";
    color[color["whiteBackground"] = 47] = "whiteBackground";
    color[color["defaultBackground"] = 49] = "defaultBackground";
    color[color["grayLightBackground"] = 100] = "grayLightBackground";
    color[color["redLightBackground"] = 101] = "redLightBackground";
    color[color["greenLightBackground"] = 102] = "greenLightBackground";
    color[color["yellowLightBackground"] = 103] = "yellowLightBackground";
    color[color["blueLightBackground"] = 104] = "blueLightBackground";
    color[color["magentaLightBackground"] = 105] = "magentaLightBackground";
    color[color["cyanLightBackground"] = 106] = "cyanLightBackground";
    color[color["whiteLightBackground"] = 107] = "whiteLightBackground";
})(color = exports.color || (exports.color = {}));
var utils;
(function (utils) {
    utils[utils["off"] = 0] = "off";
    utils[utils["boldOn"] = 1] = "boldOn";
    utils[utils["underlineOn"] = 4] = "underlineOn";
    utils[utils["blinkOn"] = 5] = "blinkOn";
    utils[utils["boldOff"] = 21] = "boldOff";
    utils[utils["underlineOff"] = 24] = "underlineOff";
    utils[utils["blinkOff"] = 25] = "blinkOff";
})(utils = exports.utils || (exports.utils = {}));
var Colorizer = /** @class */ (function () {
    function Colorizer() {
    }
    Colorizer.prototype.render = function (msg, color, bold, background) {
        var colors = [color];
        if (background) {
            colors.push(background);
        }
        if (bold) {
            return "\u001B[1m\u001B[" + colors.join(';') + "m" + msg + "\u001B[21m\u001B[0m";
        }
        else {
            return "\u001B[" + colors.join(';') + "m" + msg + "\u001B[0m";
        }
    };
    Colorizer.prototype.code = function (code) {
        return "\u001B[" + code + "m";
    };
    return Colorizer;
}());
exports.default = Colorizer;
