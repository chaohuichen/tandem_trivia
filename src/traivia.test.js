const { getRandomQuestions, findRepeated, shuffleArray } = require('./HelperFunction')
const questions = require('./Apprentice_TandemFor400_Data.json')

test('get random question with no repeated question', () => {
  const testQuestions = getRandomQuestions(questions)
  expect(findRepeated(testQuestions)).toBeFalsy()
})

test('shuffle the array', () => {
  const testQuestions = getRandomQuestions(questions)
  const copyTestQuestions = [...testQuestions]
  expect(shuffleArray(copyTestQuestions)).not.toEqual(testQuestions)
})
