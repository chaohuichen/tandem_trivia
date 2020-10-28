const getRandomQuestions=(questions)=>{
    let size = questions.length
    let questionsList = []
    let i = 0
    while(i<10){
        let index = Math.floor(Math.random()*size)
        if(!(questionsList.includes(questions[index]))) {
            questionsList.push(questions[index])
            i++
        }
    }
    return questionsList
}
const findRepeated=(inputData)=>{
    for(let i =0; i< inputData.length-1; ++i){
        let currQuestion = inputData[i].question
        for(let j = i+1;j<inputData.length;++j){
            if(currQuestion.localeCompare(inputData[j].question)===0){
                return true
            }
        }
    }
    return false
}
module.exports = {getRandomQuestions,findRepeated}