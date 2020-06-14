import React,{useReducer} from 'react';
import ContentReducer from './ContentReducer';

const Child2 = () =>{
    let [state , dispatch] = useReducer(ContentReducer , 1);
   
    console.log(state);
    return (
        <div>
            <h1>This is Second child  using CounterReducer </h1>
            <h3>Value of reducer state is : {state}</h3>
            <button onClick = {()=>dispatch('INCREMENT')}>Increment value</button>
        </div>
    )
}
export default Child2;