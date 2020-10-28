
const Questions=({questions,changeQuestionIdx })=>{
    return (<div style={{textAlign:'left'}}>
        {questions.map((question,index)=> {
            return(
                <div key={index} style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <span onClick={()=>changeQuestionIdx(index)} className='questionSpan'>{index+1}</span>
                    <h3>{question.question}</h3>
                </div>
            )
        })
        }
        </div>
    )
}
export default  Questions