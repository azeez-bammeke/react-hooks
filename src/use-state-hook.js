import React, {useState} from "react";


const UseStateHook = () => {
    //use state
    const [counter, setCounter] = useState(2);
    const [inputValue, setInputValue] = useState("Olawale Jones");

    const increment = () => {
       setCounter(counter + 1);
    }

    const setInput = (event) => {
        const item = inputValue + " new"
        setInputValue(event.target.value);
    }
    return (
            <div>
                <hr/>
                <h1 style={{color: "palegoldenrod" }}>UseState Hook Section</h1>
                <div>{counter} <button onClick= { increment }>Increment</button></div>
                <input placeholder="Enter something here....." type="text" onChange={ setInput }/>
                 <div>{inputValue}</div>
            </div>
    );
}

export default UseStateHook;