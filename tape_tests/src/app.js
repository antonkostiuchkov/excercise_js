import'./styles/main.styl'
import React from 'react'
import {render} from 'react-dom'
import Hello from './Hello'

render(<Hello />, document.getElementById('root'))


// module.exports = Bear

// function Bear (type) {
//     this.type = type || 'lol'
// }

// Bear.prototype.growl = function (says) {
//     return 'The ' + this.type + ' bear says ' + (says || 'grrr')
// }