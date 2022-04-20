import React from "react";


function QuizNavBar () {

    return (
        <div id="quizNavbar">
            <a href='/ShowList'> All questions</a>
                <br/>
            <a href= '/AddNew'>Add your own question</a>
                <br/>
            <a href="/Play"> Play Quiz</a>

        </div>
    )
}
export default QuizNavBar;