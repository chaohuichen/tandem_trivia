
import SingleTriviaCard from "./SingleTriviaCard";
import {useEffect, useState} from "react";
import {Button} from '@material-ui/core';
import questions from './Apprentice_TandemFor400_Data.json'
import produce from 'immer'
const Trivia=()=>{

    const [state,setState]=useState({isLoading:true,currentQuestion:{},count:0,questions:[]})

    useEffect(()=>{
        getRandomQuestions(questions)
    },[])

    //TODO  can write some testcases
    const getRandomQuestions=(questions)=>{
        let size = questions.length;
        let questionsList = []
       let i = 0
        while(i<10){
            let index = Math.floor(Math.random()*size)
            if(questionsList.indexOf(questions[index])>0)
                continue
            questionsList.push(questions[index])
            i++
        }

        setState(produce((draftState)=>{
            draftState.questions = questionsList
            draftState.isLoading =false
        }))

    }
    const handleNext=()=>{
        setState(produce((draftState)=>{
            draftState.count =state.count<9? state.count+1:state.count
        }))
    }

    if(state.isLoading){
        return <p>loading</p>
    }else {
        return (
            <form onSubmit={() => {
            }}>
                <SingleTriviaCard question={state.questions[state.count]}/>
                <Button onClick={handleNext}>Next</Button>
            </form>
        )
    }
}

export default Trivia