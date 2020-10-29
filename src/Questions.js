const Questions = ({ questions, changeQuestionIdx, userAnswer, isSubmited }) => {
  const checkCorrectAnswer = (index, correctAnswer) => {
    if (userAnswer[index] === correctAnswer) {
      return { backgroundColor: 'green' }
    } else {
      return { backgroundColor: 'red' }
    }
  }
  const checkIsAnswer = (index) => {
    if (userAnswer[index] !== '') {
      return { backgroundColor: 'yellow' }
    }
    return {}
  };
  return (
    <div style={{ textAlign: 'left' }}>
      {questions.map((question, index) => {
        return (
          <div key={index}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <span
                onClick={() => changeQuestionIdx(index)}
                className='questionSpan'
                style={
                  isSubmited ? checkCorrectAnswer(index, question.correct) : checkIsAnswer(index)
                }
              >
                {isSubmited ? '\u2713' : index + 1}
              </span>
              <h3>{question.question}</h3>
            </div>
            {isSubmited && <p style={{ marginLeft: '45px' }}>{question.correct}</p>}
          </div>
        )
      })}
    </div>
  )
};
export default Questions
