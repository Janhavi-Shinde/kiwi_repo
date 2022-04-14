import React from 'react';
function Box ({updatedArray}) {
    return (
        <div className="Box">
            <img src={updatedArray} alt='character'/>
            {/* <p>My name is: and my House is: </p> */}
        </div>
    )
}
export default Box;