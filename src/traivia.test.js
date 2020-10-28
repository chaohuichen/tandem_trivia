const {getRandomQuestions,findRepeated} =require('./HelperFunction')
const questions  =require('./Apprentice_TandemFor400_Data.json')

// const findRepeated=(inputData)=>{
//     for(let i =0; i< inputData.length-1; ++i){
//         let currQuestion = inputData[i].question
//         for(let j = i+1;j<inputData.length;++j){
//             if(currQuestion.localeCompare(inputData[j].question)===0){
//                 return true
//             }
//         }
//     }
//     return false
// }
test('get random question with no repeated question', () => {
    const testQuestions = getRandomQuestions(questions)
    expect(findRepeated(testQuestions)).toBeFalsy()
});

