import { React, useEffect, useState } from 'react';
import ShowList from "./ShowList";
import AddNew from './AddNew';

function Quiz(){
const [questions, setQuestions ] = useState(null);
    useEffect(
        ()=> { 
            fetch("http://localhost:4000/questions")
            .then(r=>r.json())
            .then(data => setQuestions(data));
            console.log(questions);           
        },[]
    );
    
   

    return(
        <>
        <h2>Quiz Component:</h2>
        <ShowList questions={questions}/>
        <AddNew/>
        
        </>
        
        
    )

}

export default Quiz;