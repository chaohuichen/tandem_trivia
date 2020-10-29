import SingleTriviaCard from './SingleTriviaCard'
import { useEffect, useState } from 'react'
import { Button, CircularProgress, makeStyles } from '@material-ui/core'
import questions from './Apprentice_TandemFor400_Data.json'
import produce from 'immer'
import Questions from './Questions'
import { getRandomQuestions, questionsSize } from './HelperFunction'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1, 1, 0, 0)
  }
}))
const Trivia = () => {
  const lastQuestionIdx = questionsSize - 1
  const [state, setState] = useState({
    isLoading: true,
    currentQuestion: {},
    count: 0,
    questions: [],
    userAnswer: new Array(questionsSize).fill(''),
    score: 0,
    isSubmited: false
  })
  const classes = useStyles()

  useEffect(() => {
    setState(
      produce((draftState) => {
        draftState.questions = getRandomQuestions(questions)
        draftState.isLoading = false
      })
    )
  }, [])

  const handleNext = () => {
    setState(
      produce((draftState) => {
        draftState.count = state.count < lastQuestionIdx ? state.count + 1 : state.count
      })
    )
  };

  const handlePrev = () => {
    setState(
      produce((draftState) => {
        draftState.count = state.count > 0 ? state.count - 1 : state.count
      })
    )
  };

  const handleUserInput = (answerChoice) => {
    const tempAnswers = [...state.userAnswer]
    tempAnswers[state.count] = answerChoice
    setState(
      produce((draftState) => {
        draftState.userAnswer = tempAnswers
      })
    )
  };

  const handleOnSubmit = (event) => {
    event.preventDefault()
    const answerKeys = state.questions.map((question) => question.correct)
    let score = 0
    for (let i = 0; i < state.userAnswer.length; ++i) {
      if (answerKeys[i] === state.userAnswer[i]) {
        score += 1
      }
    }
    setState(
      produce((draftState) => {
        draftState.score = score
        draftState.isSubmited = true
      })
    )
  };

  const changeQuestionIdx = (questionNumber) => {
    setState(
      produce((draftState) => {
        draftState.count = questionNumber
      })
    )
  };

  const resetGame = () => {
    setState(
      produce((draftState) => {
        draftState.questions = getRandomQuestions(questions)
        draftState.isLoading = false
        draftState.currentQuestion = {}
        draftState.count = 0
        draftState.userAnswer = new Array(questionsSize).fill('')
        draftState.score = 0
        draftState.isSubmited = false
      })
    )
  };

  if (state.isLoading) {
    return <CircularProgress color='secondary' />
  } else {
    return (
      <div className='test'>
        {!state.isSubmited && <h2>{`${state.count + 1} / ${questionsSize}`}</h2>}
        {state.isSubmited && (
          <>
            <h2>{`You got ${state.score} out of ${questionsSize} in this round!`}</h2>
            <Button
              variant='contained'
              color='primary'
              onClick={resetGame}
              style={{ textTransform: 'capitalize', marginBottom: '10px' }}
            >
              Restart Game
            </Button>
          </>
        )}
        <form onSubmit={handleOnSubmit}>
          <SingleTriviaCard
            question={state.questions[state.count]}
            questionNumber={state.count}
            userAnswer={state.userAnswer}
            handleUserInput={handleUserInput}
            isSubmited={state.isSubmited}
          />
          <Button
            className={classes.button}
            variant='contained'
            disabled={state.count === 0}
            onClick={handlePrev}
          >
            Prev
          </Button>
          {state.count < lastQuestionIdx ? (
            <Button
              className={classes.button}
              variant='contained'
              color='primary'
              onClick={handleNext}
            >
              Next
            </Button>
          ) : (
            <Button
              className={classes.button}
              style={{ backgroundColor: 'green', color: 'white' }}
              disabled={state.userAnswer[state.count] === '' || state.isSubmited}
              type='submit'
              variant='outlined'
              color='primary'
            >
              Submit
            </Button>
          )}
        </form>
        <Questions
          questions={state.questions}
          changeQuestionIdx={changeQuestionIdx}
          userAnswer={state.userAnswer}
          isSubmited={state.isSubmited}
        />
      </div>
    )
  }
}

export default Trivia
