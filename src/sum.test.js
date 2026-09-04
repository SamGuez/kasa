export function sum(a, b) {
  return a + b
}

// src/sum.test.js
import { expect, test } from 'vitest'
import { sum } from './sum.test'

test('adds 1 + 2 to equal 3', () => {
  const resultatsum = sum(1, 2)
  expect(resultatsum).toBe(3)
})