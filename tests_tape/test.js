var Bear = require('./index.js')
var addClass = require('./className.js')
var test  = require('tape')

test('should growl', function (assert) {
    var bear = new Bear()
    var result = bear.growl()
    assert.equal(result, 'The any bear says grrr')
    assert.end()
})

test('should start empty', function (assert) {
    var arr = []

    assert.equal(arr.length, 0, 'Array length was not 0')
    assert.end()
})

test('should add class to element', function (assert) {
    var element = { className: '' }

    addClass(element, 'test-class')

    assert.equal(element.className, 'test-class')
    assert.end()
})

test('should not add class which already exists', function (assert) {
    var element = { className: 'test-class' }

    addClass(element, 'test')

    var numClasses = element.className.split(' ').length
    assert.equal(numClasses, 1)
    assert.end()
})

test('should append new class after existing one', function (assert) {
    var element = { className: 'exists' }

    addClass(element, 'new-class')

    var classes = element.className.split(' ')
    console.log('', element);
    assert.equal(classes[1], 'new-class')

    assert.end()
})