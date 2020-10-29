const questionsSize = 10

const getRandomQuestions = (questions) => {
  const size = questions.length
  const questionsList = []
  let i = 0
  while (i < questionsSize) {
    const index = Math.floor(Math.random() * size)
    if (!questionsList.includes(questions[index])) {
      questionsList.push(questions[index])
      i++
    }
  }
  return questionsList
};
// test find for testing getRandomQuestions will return non-repeated array
const findRepeated = (inputData) => {
  for (let i = 0; i < inputData.length - 1; ++i) {
    const currQuestion = inputData[i].question
    for (let j = i + 1; j < inputData.length; ++j) {
      if (currQuestion.localeCompare(inputData[j].question) === 0) {
        return true
      }
    }
  }
  return false
};

// Fisher-Yates algorithm for shuffle the array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
}

module.exports = { getRandomQuestions, findRepeated, shuffleArray, questionsSize }
