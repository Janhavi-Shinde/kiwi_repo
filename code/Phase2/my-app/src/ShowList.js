import React from 'react';


function ShowList({questions}){

    const card = questions && questions.map(q => (
        <div className="QCard" >
        <h3>Question: {q.question}
        <button>Delete Question</button></h3> 
        
        <label htmlFor="selectAnswers">
      Pick your answer:
        </label>
        <select name="selectAnswers" defaultValue={q.correctIndex} >
      {q.options.map((option, index) => (
        <option key={index} value={index}>
          {option}
        </option>
      ))}
    </select>
        </div>
    ))
    return(
        <>
        <h2>List of Questions</h2>
        {card} 
        </>
        
        
    )

}

export default ShowList;