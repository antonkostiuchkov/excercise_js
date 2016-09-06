import Bear from './bear'
import test from 'ava'

test('deep equal', t => {
  t.deepEqual([1, 2], [1, 2])
})

test('foo', t => {
  const bear = new Bear('brown')
  const result = bear.growl()
  t.is(result, 'The brown bear says grrr')
})
