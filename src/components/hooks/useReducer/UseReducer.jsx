import React, { useReducer } from 'react'
import GithubLink from '../../ui/GithubLink';

const UseReducer = () => {

    const initialState = {
        count: 0,
        inc: 3,
        dec: 2
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT":
                return { ...state, count: state.count + state.inc };
            case "DECREMENT":
                return { ...state, count: state.count - state.dec };
            case "RESET":
                return { ...state, count: 0 };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className='center'>
            <h1>Counter using useReducer hook</h1>
            <h1>Count : {state.count} </h1>
            <div className='flex gap-10'>
                <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
                <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
                <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
            </div>
            <GithubLink link="https://github.com/dkvaghela25/react-learning/blob/main/src/components/hooks/useReducer/UseReducer.jsx" />
        </div>
    )
}

export default UseReducer
