import { useEffect, useState } from 'react'
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  CardContent,
  Card,
  makeStyles
} from '@material-ui/core'

import { shuffleArray } from './HelperFunction'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 10px,20px,10px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  formControl: {
    margin: theme.spacing(3)
  }
}))

const SingleTriviaCard = ({
  question,
  userAnswer,
  questionNumber,
  handleUserInput,
  isSubmited
}) => {
  const classes = useStyles()

  const [multipleChoices, setMultipleChoices] = useState([])
  const [questionTitle, setQuestionTitle] = useState('')

  const dataTransform = (questionData) => {
    const multipleChoicesTemp = [...questionData.incorrect, questionData.correct]
    shuffleArray(multipleChoicesTemp)
    setMultipleChoices(multipleChoicesTemp)
    setQuestionTitle(questionData.question)
  };

  useEffect(() => {
    if (!isSubmited && question !== undefined) {
      dataTransform(question)
    }
  }, [question])

  return (
    <Card className={classes.root}>
      <CardContent>
        <FormControl component='fieldset' className={classes.formControl}>
          <FormLabel component='legend' style={{ fontSize: '20px' }}>
            <span>{questionNumber + 1}. </span>
            {questionTitle}
          </FormLabel>
          <RadioGroup aria-label='quiz' name='quiz' value={userAnswer[questionNumber]}>
            {multipleChoices.map((answer) => (
              <FormControlLabel
                onClick={() => handleUserInput(answer)}
                key={answer}
                value={answer}
                control={<Radio />}
                label={answer}
                className={isSubmited && answer === question.correct ? 'correctAnswer' : ''}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Card>
  )
};

export default SingleTriviaCard
