import React,{useContext} from 'react'
import ContentCreate from './ContentCreate';
const  Child =()=> {
    let ContentValue  =  useContext(ContentCreate);
    console.log(ContentValue);
    return (
        <div>
            <h1>This is first child  using CounterContent </h1>
            <h3>The counter is : {ContentValue[0]}</h3>
            <button onClick= {()=> {ContentValue[1](++ContentValue[0])}}>Increament</button>
        </div>
    )
}

export default Child;