import { React, useEffect, useState } from 'react';
import ShowList from "./ShowList";
import AddNew from './AddNew';
import Play from './Play';
import QuizNavBar from './QuizNavbar';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
            {/* // <BrowserRouter>
            //     <h2>Quiz Component:</h2>
            //     <QuizNavBar />
            //     <Switch>
            //         <Route path="/ShowList">
            //         {questions && <ShowList questions={questions} />}
            //         </Route>

            //         <Route  path="/Play">
            //         {questions && <Play questions={questions} />}
            //         </Route>

            //         <Route  exact path="/AddNew">
            //         {questions && <AddNew questions={questions} />}
            //         </Route>
            //     </Switch>

            // </BrowserRouter> */}
             <QuizNavBar />
              {questions && <ShowList questions={questions} />}
              {questions && <Play questions={questions} />}
              {questions && <AddNew questions={questions} />}
              </>
    )
}

export default Quiz;