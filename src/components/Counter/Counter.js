import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement} from '../actions';

function Counter() {  
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return(
        <div className = "counter">
            <button onClick = {()=>dispatch(increment())}>+</button>
            <span style={{'padding-left': '20px', 'padding-right': '20px', 'color':'yellow'}}>{counter}</span>
            <button onClick = {()=>dispatch(decrement())}>-</button>
        </div>
    );
}
 
export default Counter;