import { expect, assert } from 'chai';
import Colorizer, { utils, color } from '../src/colorizer'

describe('Colorizer', () => {
    it('can be initialized', () => {
        const c = new Colorizer()
        expect(c).to.be.instanceOf(Colorizer)
    })

    it('return the correct string', () => {
        const c = new Colorizer()
        expect(c.render('bonjour', color.blue)).to.equal('\x1b[34mbonjour\x1b[0m')
    })

    it('return the correct string (bold)', () => {
        const c = new Colorizer()
        expect(c.render('bonjour', color.yellow, true)).to.equal('\x1b[1m\x1b[33mbonjour\x1b[21m\x1b[0m')
    })

    it('return the correct string (background)', () => {
        const c = new Colorizer()
        expect(c.render('bonjour', color.black, false, color.greenLightBackground)).to.equal('\x1b[30;102mbonjour\x1b[0m')
    })

    it('return the correct string (bold & background)', () => {
        const c = new Colorizer()
        expect(c.render('bonjour', color.black, true, color.cyanBackground)).to.equal('\x1b[1m\x1b[30;46mbonjour\x1b[21m\x1b[0m')
    })

    it('return the correct code (color enum)', () => {
        const c = new Colorizer()
        expect(c.code(color.grayLight)).to.equal('\x1b[90m')
    })

    it('return the correct code (utils enum)', () => {
        const c = new Colorizer()
        expect(c.code(utils.blinkOn)).to.equal('\x1b[5m')
    })
})

describe('utils enum', () => {
    it('return the right index', () => {
        const msg = (name: string) => {
            return `error bad index ${name}`
        }

        assert.equal(utils.off, 0, msg('off'))
        assert.equal(utils.boldOn, 1, msg('boldOn'))
        assert.equal(utils.underlineOn, 4, msg('underlineOn'))
        assert.equal(utils.blinkOn, 5, msg('blinkOn'))
        assert.equal(utils.boldOff, 21, msg('boldOff'))
        assert.equal(utils.underlineOff, 24, msg('underlineOff'))
        assert.equal(utils.blinkOff, 25, msg('blinkOff'))
    })
})


describe('color enum', () => {
    it('return the right index', () => {
        const msg = (name: string) => {
            return `error bad index ${name}`
        }

        assert.equal(color.black, 30, msg('black'))
        assert.equal(color.red, 31, msg('red'))
        assert.equal(color.green, 32, msg('green'))
        assert.equal(color.yellow, 33, msg('yellow'))
        assert.equal(color.blue, 34, msg('black'))
        assert.equal(color.magenta, 35, msg('magenta'))
        assert.equal(color.cyan, 36, msg('cyan'))
        assert.equal(color.white, 37, msg('white'))

        assert.equal(color.default, 39, msg('default'))

        assert.equal(color.grayLight, 90, msg('grayLight'))
        assert.equal(color.redLight, 91, msg('redLight'))
        assert.equal(color.greenLight, 92, msg('greenLight'))
        assert.equal(color.yellowLight, 93, msg('yellowLight'))
        assert.equal(color.blueLight, 94, msg('blueLight'))
        assert.equal(color.magentaLight, 95, msg('magentaLight'))
        assert.equal(color.cyanLight, 96, msg('cyanLight'))
        assert.equal(color.whiteLight, 97, msg('whiteLight'))

        assert.equal(color.blackBackground, 40, msg('blackBackground'))
        assert.equal(color.redBackground, 41, msg('redBackground'))
        assert.equal(color.greenBackground, 42, msg('greenBackground'))
        assert.equal(color.yellowBackground, 43, msg('yellowBackground'))
        assert.equal(color.blueBackground, 44, msg('blueBackground'))
        assert.equal(color.magentaBackground, 45, msg('magentaBackground'))
        assert.equal(color.cyanBackground, 46, msg('cyanBackground'))
        assert.equal(color.whiteBackground, 47, msg('whiteBackground'))

        assert.equal(color.defaultBackground, 49, msg('defaultBackground'))

        assert.equal(color.grayLightBackground, 100, msg('grayLightBackground'))
        assert.equal(color.redLightBackground, 101, msg('redLightBackground'))
        assert.equal(color.greenLightBackground, 102, msg('greenLightBackground'))
        assert.equal(color.yellowLightBackground, 103, msg('yellowLightBackground'))
        assert.equal(color.blueLightBackground, 104, msg('blueLightBackground'))
        assert.equal(color.magentaLightBackground, 105, msg('magentaLightBackground'))
        assert.equal(color.cyanLightBackground, 106, msg('cyanLightBackground'))
        assert.equal(color.whiteLightBackground, 107, msg('whiteLightBackground'))
    })
})