import React from 'react';
function Box ({updatedArray}) {
    return (
        <div className="Box">
            <img src={updatedArray.image} alt='character'/>
            <p>My name is {updatedArray.name} and my House is {updatedArray.house} </p>
        </div>
    )
}
export default Box;