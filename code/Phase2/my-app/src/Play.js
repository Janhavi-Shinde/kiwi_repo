import { React, useState } from "react";

function Play({ questions }) {

    const [questionIndex, setQuestionIndex] = useState(0);
    console.log(questions);

    

const currentQ = questions[questionIndex];
const arrayLength = questions.length -1 ; // 4
const [ ternary, setTernary ] = useState(false);
const [ score, setScore ] = useState(0);

console.log("currentQ's index:", questionIndex); //5 

function handleClick(correctAnswer) {
    
    if (questionIndex < arrayLength) {
        console.log("questionIndex was:", questionIndex);
        setQuestionIndex(questionIndex + 1);
        console.log("questionIndex now increased to:", questionIndex);
        console.log(questionIndex, "out of", arrayLength);
    } else if (questionIndex === arrayLength) {
         console.log("questionIndex has reached", questionIndex, "out of ", arrayLength);
         setTernary(true);
        } if (correctAnswer) {
            setScore(score + 1)
        }
}


function handleStartOver () {
    setQuestionIndex(0);
    setTernary(false);
    setScore(0);
}


    return (

        <div className="QuestionCard">
{ternary? <>
            <h2> GAME OVER. YOUR SCORE IS: {score} </h2>
            <button onClick={handleStartOver}>startOver</button> 
            
            </> 
            :  <div className="QuestionCard">
            <h3> Questions: {currentQ.question} </h3> 
            
            {currentQ.options.map((option, index) => {
                const correctAnswer = index === currentQ.correctIndex;
return (<button onClick={() => handleClick(correctAnswer)} key={option}>{option}</button> )})}
            
        </div>}
            
        </div>

    )
}

export default Play;

