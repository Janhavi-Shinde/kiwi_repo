import { React, useEffect, useState } from 'react';
import ShowList from "./ShowList";
import AddNew from './AddNew';
import Play from './Play';

function Quiz() {
    const [questions, setQuestions] = useState(null);
    useEffect(
        () => {
            fetch("http://localhost:4000/questions")
                .then(r => r.json())
                .then(data => setQuestions(data));
            console.log(questions);
        }, []
    );



    return (
        <>
            <h2>Quiz Component:</h2>
            {questions && <ShowList questions={questions} /> }
            {questions && <AddNew questions={questions} /> }
            {questions && <Play questions={questions} /> }
            
        </>


    )

}

export default Quiz;