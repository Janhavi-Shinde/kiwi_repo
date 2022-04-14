import React from 'react';
function Box ({updatedArray}) {
    return (
        <div className="Box">
            <img src={updatedArray} alt='character'/>
        </div>
    )
}
export default Box;