import { classNames } from './classNames'

describe('classNames', () => {
  test('with only frst param', () => {
    expect(classNames('someClass')).toBe('someClass')
  })
  test('with additional class', () => {
    const expected = 'someClass class1 class2'
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
  })
  test('with conditional classes with true and false ', () => {
    const expected = 'someClass class1 class2 hovered'
    expect(classNames('someClass', { hovered: true, scrollable: false }, ['class1', 'class2'])).toBe(expected)
  })
})
