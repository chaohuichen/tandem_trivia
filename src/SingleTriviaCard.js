import {useEffect, useState} from 'react'
import {Radio,RadioGroup,FormControlLabel,FormControl,FormLabel,CardContent,Card,
    makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    root: {
        width: '40vw',
        margin: 'auto',
        marginBottom:'20px',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    formControl: {
        margin: theme.spacing(3),
    },
}));

const SingleTriviaCard=({question,userAnswer,questionNumber,handleUserInput})=>{
    const classes = useStyles();

    const [multipleChoices,setMultipleChoices]=useState([])
    const [questionTitle,setQuestionTitle]=useState('')

    //TODO  randamzie the choices
    const  dataTransform=(questionData)=>{

        const multipleChoicesTemp = [...questionData.incorrect,questionData.correct]
        setMultipleChoices(multipleChoicesTemp)
        setQuestionTitle(questionData.question)
    }

    useEffect(()=>{
    dataTransform(question)
    },[question])


    return (
        <Card className={classes.root}>
            <CardContent>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend"><span>{questionNumber+1}. </span>{questionTitle}</FormLabel>
                        {/*TODO randomize the answerChoice*/}
                        <RadioGroup aria-label="quiz" name="quiz" value={userAnswer[questionNumber]}>
                            {multipleChoices.map((answer)=><FormControlLabel onClick={()=>handleUserInput(answer)} key = {answer} value={answer} control={<Radio />} label={answer}/>)}
                        </RadioGroup>
                </FormControl>
            </CardContent>
        </Card>
    );
}

export default  SingleTriviaCard