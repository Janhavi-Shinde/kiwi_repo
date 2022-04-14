import { React, useState } from 'react';
import Button from "./Button";
import Box from "./Box";

function Carousel() {
    const imgArr = ["http://hp-api.herokuapp.com/images/harry.jpg", "http://hp-api.herokuapp.com/images/hermione.jpeg",
        "http://hp-api.herokuapp.com/images/ron.jpg", "http://hp-api.herokuapp.com/images/draco.jpg"];

    const [index, setIndex] = useState(0);

    const lastIndex = imgArr.length -1 ;
    console.log(lastIndex);

    function changeIndex() {
        console.log('starting index:', index);
        console.log('changeIndex has been called');
        if(index < lastIndex){
            setIndex(index + 1);
            
        } else if(index >= lastIndex) {
            setIndex(0);
        };     
    }
    let updatedArray = imgArr[index];
        console.log('updated imgArr index to :', index);
   
    return (<>
    <Button changeIndex={changeIndex}/>
    <Box updatedArray={updatedArray} />
    </>
    
    )
}

export default Carousel;