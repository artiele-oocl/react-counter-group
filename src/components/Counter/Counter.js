import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement, multiplyBy2, divideBy2, reset} from '../actions';

function Counter() {  
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return(
        <div className = "counter">
            <span style={{'padding-left': '20px', 'padding-right': '20px', 'color':'yellow'}}>{counter}</span>
            <button onClick = {()=>dispatch(increment())}>+</button>
            <button onClick = {()=>dispatch(decrement())}>-</button>
            <button onClick = {()=>dispatch(multiplyBy2())}>*2</button>
            <button onClick = {()=>dispatch(divideBy2())}>/2</button>
            <button onClick = {()=>dispatch(reset())}>R</button>
        </div>
    );
}
 
export default Counter;