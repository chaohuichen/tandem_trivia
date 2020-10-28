import {useEffect, useState} from 'react'
import {Radio,RadioGroup,FormControlLabel,FormControl,FormHelperText,FormLabel,CardContent,Card,
    makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    root: {
        width: '50vw',
        margin: 'auto',
        marginBottom:'20px'
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
    button: {
        margin: theme.spacing(1, 1, 0, 0),
    },
}));

const SingleTriviaCard=({question})=>{
    const classes = useStyles();

    const [multipleChoices,setMultipleChoices]=useState([])
    const [questionTitle,setQuestionTitle]=useState('')

    const  dataTransform=(data)=>{
        const multipleChoicesTemp = [...data.incorrect,data.correct]
        setMultipleChoices(multipleChoicesTemp)
        setQuestionTitle(data.question)
    }
    useEffect(()=>{
    dataTransform(question)
    },[question])
    //TODO  need a function to listen the onClick
    return (
        <Card className={classes.root}>
            <CardContent>
                <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">{questionTitle}</FormLabel>
                        {/*TODO randomize the answerChoice*/}
                        <RadioGroup aria-label="quiz" name="quiz" >
                            {multipleChoices.map((answer)=><FormControlLabel key = {answer} value={answer} control={<Radio />} label={answer}/>)}
                        </RadioGroup>
                        <FormHelperText>{}</FormHelperText>
                </FormControl>
            </CardContent>
        </Card>
    );
}

export default  SingleTriviaCard