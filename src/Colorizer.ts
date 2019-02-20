export enum color {
    black = 30,
    red,
    green,
    yellow,
    blue,
    magenta,
    cyan,
    white,

    default = 39,

    grayLight = 90,
    redLight,
    greenLight,
    yellowLight,
    blueLight,
    magentaLight,
    cyanLight,
    whiteLight,

    blackBackground = 40,
    redBackground,
    greenBackground,
    yellowBackground,
    blueBackground,
    magentaBackground,
    cyanBackground,
    whiteBackground,

    defaultBackground = 49,

    grayLightBackground = 100,
    redLightBackground,
    greenLightBackground,
    yellowLightBackground,
    blueLightBackground,
    magentaLightBackground,
    cyanLightBackground,
    whiteLightBackground,
}

export enum utils {
    off,
    boldOn,
    underlineOn = 4,
    blinkOn,
    boldOff = 21,
    underlineOff = 24,
    blinkOff
}

export default class Colorizer {
    public render(msg: string, color: color, bold?: boolean, background?: color): string {
        let colors: Array<number> = [color];

        if (background) {
            colors.push(background)
        }

        if (bold) {
            return `\x1b[1m\x1b[${colors.join(';')}m${msg}\x1b[21m\x1b[0m`
        } else {
            return `\x1b[${colors.join(';')}m${msg}\x1b[0m`
        }
    }

    public code(code: color | utils): string {
        return `\x1b[${code}m`
    }
}