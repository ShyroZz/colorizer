# Simple colorizer

**Usage**

```javascript
import Colorizer, { utils, color } from './colorizer'

let c = new Colorizer()

console.log(c.render('Sample', color.red))

console.log(c.render('SampleBold', color.greenLight, true))

console.log(c.render('SampleBackground', color.white, false, color.blueLightBackground))

console.log(c.code(color.yellow))
console.log('.')
console.log('..')
console.log('...')
console.log('....')
console.log(c.code(utils.off))
```