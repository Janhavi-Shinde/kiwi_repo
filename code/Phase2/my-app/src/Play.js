import { React, useState } from "react";

function Play({ questions }) {

    const [questionIndex, setQuestionIndex] = useState(0);
    console.log(questions);

    

const currentQ = questions[questionIndex];
const valueLength = questions.length - 1; // 2
console.log(valueLength);

function handleClick(){
    console.log("questionIndex was:", questionIndex)
    setQuestionIndex(questionIndex + 1);
    console.log("questionIndex now increased to:", questionIndex);
}

const ternary = () => (questionIndex < valueLength); // valueLength = 2
// const ternary = questions[-1]


const options = currentQ.options.map(option => (
<button onClick={handleClick} key={option}>{option}</button> ))

const button = <button onClick={handleClick}>Submit</button> 

const startOver = <button onClick={handleStartOver}>Start Over </button>
function handleStartOver () {
    setQuestionIndex(0)
}


    return (

        <div className="QuestionCard">
{ternary() ? <div className="QuestionCard">
                <h3> Questions: {currentQ.question} </h3> 
                {options} {button} 
            </div> 
            : <>
            <h2> GAME OVER. YOUR SCORE IS: X </h2> 
            {startOver}
            </> }
            
        </div>


    )
}

export default Play;