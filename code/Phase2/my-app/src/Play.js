import { React, useState } from "react";

function Play({ questions }) {

    const [questionIndex, setQuestionIndex] = useState(0);
    console.log(questions);

    

const currentQ = questions[questionIndex];
const arrayLength = questions.length -1 ; // 4

console.log("currentQ's index:", questionIndex); //5 

function handleClick(){
    if (questionIndex < arrayLength) {
        console.log("questionIndex was:", questionIndex);
        setQuestionIndex(questionIndex + 1);
        console.log("questionIndex now increased to:", questionIndex);
        console.log(questionIndex, "out of", arrayLength);
    } else if (questionIndex === arrayLength) {
         console.log("questionIndex has reached", questionIndex, "out of ", arrayLength);
         setTernary(true);
        }
}

// const ternary = () => (questionIndex === arrayLength); // arrayLength = 2
// const ternary = questions[-1]

const  [ ternary, setTernary ] = useState(false)


const options = currentQ.options.map(option => (
<button onClick={handleClick} key={option}>{option}</button> ))

const button = <button onClick={handleClick}>Submit</button> 

const startOver = <button onClick={handleStartOver}>Start Over </button>
function handleStartOver () {
    setQuestionIndex(0);
    setTernary(false)
}


    return (

        <div className="QuestionCard">
{ternary? <>
            <h2> GAME OVER. YOUR SCORE IS: X </h2> 
            {startOver}
            </> 
            :  <div className="QuestionCard">
            <h3> Questions: {currentQ.question} </h3> 
            {options} {button} 
        </div>}
            
        </div>

    )
}

export default Play;


// {/* <div className="QuestionCard">
// {currentQ ? <div className="QuestionCard">
//                 <h3> Questions: {currentQ.question} </h3> 
//                 {options} {button} 
//             </div> 
//             : <>
//             <h2> GAME OVER. YOUR SCORE IS: X </h2> 
//             {startOver}
//             </> }
            
//         </div> */}