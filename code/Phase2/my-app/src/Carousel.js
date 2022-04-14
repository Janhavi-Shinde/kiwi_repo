import { React, useState } from 'react';
import Button from "./Button";
import Box from "./Box";

function Carousel({apiData}) {

    const images = apiData.map(element => element.image);
    // const imgArr = images
    const imgArr = images.filter((elem)=>(elem? elem : null));
    const [index, setIndex] = useState(0);
    const lastIndex = imgArr.length -1 ; 
    // const lastIndex = 10

    const object = apiData.map(elem => ({image: elem.image, name: elem.name, house: elem.house}));
    const validObject = JSON.stringify(object);
    const slicedArray = validObject.slice(1,12);
    console.log(slicedArray);

    // console.log(validObject.slice(1,12));
    // const validTenObjects = validObject.slice(11);
    // console.log(validObject);

        

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

    
   
    return (
    <>
    <Button changeIndex={changeIndex}/>
    <Box updatedArray={updatedArray} />
    </>
    )
}

export default Carousel;