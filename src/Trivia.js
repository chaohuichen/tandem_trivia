import SingleTriviaCard from "./SingleTriviaCard";
import {useEffect, useState} from "react";
import {Button, CircularProgress, makeStyles} from '@material-ui/core';
import questions from './Apprentice_TandemFor400_Data.json'
import produce from 'immer'
import Questions from "./Questions";
import {getRandomQuestions} from './HelperFunction'

const useStyles = makeStyles((theme)=>({
    button: {
        margin: theme.spacing(1, 1, 0, 0),
        color:'red',
        backgroundColor:'red',
        height:'500px'
    },
}));
const Trivia=()=>{

    const [state,setState]=useState({isLoading:true,currentQuestion:{},count:0,questions:[],userAnswer:new Array(10).fill(''),score:0})
    const classes = useStyles();
    console.log(classes.button)
    useEffect(()=>{
        setState(produce((draftState)=>{
            draftState.questions =  getRandomQuestions(questions)
            draftState.isLoading = false
        }))
    },[])

    const handleNext=()=>{
        setState(produce((draftState)=>{
            draftState.count =state.count < 9 ? state.count+1:state.count
        }))
    }

    const handlePrev=()=>{
        setState(produce((draftState)=>{
            draftState.count =state.count > 0 ? state.count-1:state.count
        }))
    }
    const handleUserInput=(answerChoice)=> {
        let tempAnswers = [...state.userAnswer]
        tempAnswers[state.count] = answerChoice
        setState(produce((draftState) => {
            draftState.userAnswer = tempAnswers
        }))
    }
    const handleOnSubmit= (event)=>{
        event.preventDefault();
        let answerKeys = state.questions.map(question=>question.correct)
        let score = 0
        for(let i  =0;i<state.userAnswer.length;++i){
            if(answerKeys[i]===state.userAnswer[i]){
                score+=1
            }
        }
        setState(produce((draftState) => {
            draftState.score = score
        }))
    }
    const changeQuestionIdx = (questionNumber)=>{
        setState(produce((draftState) => {
            draftState.count= questionNumber
        }))
    }

    if(state.isLoading){
        return <CircularProgress color="secondary" />
    }else {
        return (
            <div className='test'>
                <h2>{`${state.count+1}/10`}</h2>
            <form onSubmit={handleOnSubmit} >
                <SingleTriviaCard question={state.questions[state.count]} questionNumber = {state.count} userAnswer = {state.userAnswer}handleUserInput={handleUserInput}/>
                <Button variant="contained" disabled={state.count===0} onClick={handlePrev}>Prev</Button>
                {state.count < 9? <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>
                :<Button className={classes.button} disabled={state.userAnswer[state.count]===''} type="submit" variant="outlined" color="primary" >Submit</Button>
                }
            </form>
                <Questions questions={state.questions} changeQuestionIdx ={changeQuestionIdx }/>
            </div>
        )
    }
}

export default Trivia